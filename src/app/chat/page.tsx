'use client';

import { MessageSquare, Mail, ArrowRight } from 'lucide-react';

export default function ChatPage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
              <MessageSquare className="w-3.5 h-3.5" />
              Chat with LoopFactory AI
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              AI Chat <span className="text-brand-400">Coming Soon</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              Our intelligent creative loop assistant is on the way. Describe your vision and let AI generate,
              refine, and perfect your loops — audio and visual.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-card border border-border p-8">
            <h2 className="text-2xl font-bold mb-2">Get Early Access</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Sign up to be notified when LoopFactory AI chat launches.
            </p>
            <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-lg bg-accent border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-brand text-white font-medium hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                Notify Me
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <h3 className="font-semibold mb-2">Have Questions Now?</h3>
            <p className="text-sm text-muted-foreground">
              Reach us at{' '}
              <a href="mailto:hello@loopfactory.ai" className="text-brand-400 hover:underline">
                hello@loopfactory.ai
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}