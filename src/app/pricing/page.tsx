'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free', price: '$0', period: 'forever', description: 'Basic optimization for hobbyists',
    features: ['1 loop', 'Basic analysis', 'Performance tips', 'Community access'],
    cta: 'Get Started', highlighted: false, priceId: null,
  },
  {
    name: 'Pro', price: '$9', period: '/month', description: 'Advanced optimization for developers',
    features: ['Unlimited loops', 'AI optimization', 'Performance reports', 'Code suggestions', 'Priority support'],
    cta: 'Start Pro', highlighted: true, priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || null,
  },
  {
    name: 'Premium', price: '$29', period: '/month', description: 'Enterprise-grade optimization',
    features: ['Everything in Pro', 'CI/CD integration', 'Custom analysis', 'API access', 'Team dashboard', 'Dedicated support'],
    cta: 'Start Premium', highlighted: false, priceId: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_PRICE_ID || null,
  },
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleCheckout(plan: (typeof plans)[number]) {
    if (!plan.priceId) return; setLoading(plan.name);
    try {
      const res = await fetch('/api/stripe-checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ priceId: plan.priceId, tier: plan.name }) });
      const data = await res.json();
      if (!res.ok) { alert(data.error || 'Checkout failed.'); return; }
      if (data.url) { window.location.href = data.url; }
    } catch (err) { console.error('Checkout error:', err); alert('Unable to start checkout.'); }
    finally { setLoading(null); }
  }

  return (
    <div className="relative">
      <section className="relative overflow-hidden py-20"><div className="absolute inset-0 gradient-mesh" /><div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Simple, Transparent <span className="text-brand-400">Pricing</span></h1><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Start free, upgrade when you need more.</p></div></section>
      <section className="py-20 border-t border-border"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid md:grid-cols-3 gap-6">{plans.map((plan) => (<div key={plan.name} className={`rounded-xl bg-card border p-8 ${plan.highlighted ? 'border-brand-500 shadow-lg shadow-brand-500/10 relative' : 'border-border'}`}>{plan.highlighted && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-brand text-white text-xs font-semibold">Most Popular</div>)}<h3 className="text-xl font-bold mb-2">{plan.name}</h3><p className="text-sm text-muted-foreground mb-4">{plan.description}</p><div className="mb-6"><span className="text-4xl font-black">{plan.price}</span><span className="text-muted-foreground text-sm">{plan.period}</span></div><ul className="space-y-3 mb-8">{plan.features.map((f) => (<li key={f} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" /><span>{f}</span></li>))}</ul><button onClick={() => handleCheckout(plan)} disabled={loading === plan.name} className={`block w-full text-center py-2.5 rounded-lg font-medium transition-opacity disabled:opacity-50 ${plan.highlighted ? 'gradient-brand text-white hover:opacity-90' : 'bg-accent text-foreground hover:bg-border'}`}>{loading === plan.name ? 'Redirecting…' : plan.cta}</button></div>))}</div></div></section>
    </div>
  );
}
