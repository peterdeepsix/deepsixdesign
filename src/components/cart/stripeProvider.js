import React from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const StripeProvider = ({ children }) => {
  const stripePromise = loadStripe(
    process.env._STRIPE_PUBLISHABLE_KEY,
  );

  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
