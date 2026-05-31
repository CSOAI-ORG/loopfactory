import { NextResponse } from 'next/server';
import type Stripe from 'stripe';

let stripe: Stripe | null = null;
function getStripe(): Stripe {
  if (!stripe) {
    const StripeSDK = require('stripe');
    stripe = new StripeSDK(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-02-24.acacia' });
  }
  return stripe!;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { priceId, customerEmail, tier } = body;

  if (!priceId || !priceId.startsWith('price_')) {
    return NextResponse.json({ error: 'Invalid or missing price ID.' }, { status: 400 });
  }

  try {
    let customerParams: any = {};
    if (customerEmail) {
      const existingCustomers = await getStripe().customers.list({ email: customerEmail, limit: 1 });
      if (existingCustomers.data.length > 0) {
        customerParams = { customer: existingCustomers.data[0].id };
      } else {
        customerParams = { customer_email: customerEmail };
      }
    }

    const session = await getStripe().checkout.sessions.create({
      ...customerParams,
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/pricing`,
      metadata: { tier },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
