import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Load Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51PGlQqGKsZKnmCjaiJg7cNrby0ipYiNhwuT5ZwdggtWpW53p4QOijYpAtu2pJqGWxcgdLGHquVfPtCwe5L437G6T00AD3uUOxy'); // Replace with your Stripe publishable key

export const CheckoutButton = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Redirect to Stripe Checkout with the predefined Price ID
    await stripe.redirectToCheckout({
      lineItems: [
        {
          price: 'price_1QbpMgGKsZKnmCjakofaioIP', // Replace with your Stripe Price ID
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: 'http://localhost:5174/success', // URL after successful payment
      cancelUrl: 'http://localhost:5174/cancel',  // URL after canceled payment
    });
  };

  return <button in onClick={handleCheckout}>Checkout</button>;
};

