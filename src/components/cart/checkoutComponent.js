import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import StripeCheckout from 'react-stripe-checkout';
import { CartContext } from './cartProvider';
import icon from 'src/images/logo.png';
import Button from '@material-ui/core/Button';

const CheckoutComponent = () => {
  const { cart, count, total } = useContext(CartContext);

  const onToken = async (token, addresses) => {
    const items = cart.map(([sku, quantity]) => ({
      type: 'sku',
      parent: sku.id,
      quantity,
    }));

    let response;
    try {
      response = await fetch('/.netlify/functions/orderCreate', {
        method: 'POST',
        body: JSON.stringify({
          token,
          order: {
            currency: 'usd',
            items,
            shipping: {
              name: addresses.shipping_name,
              address: {
                line1: addresses.shipping_address_line1,
                line2: addresses.shipping_address_line2 || '',
                city: addresses.shipping_address_city,
                state: addresses.shipping_address_state,
                postal_code: addresses.shipping_address_zip,
                country: addresses.shipping_address_country_code,
              },
            },
          },
        }),
      }).then(response => response.json());
    } catch (err) {
      alert(err.message);
    }

    localStorage.setItem('cart', '{}');

    // Redirect to order confirmation page
    // navigate(`/order?id=${response.data.id}`)
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={process.env._STRIPE_PUBLISHABLE_KEY}
      name="Deep Six Design" // the pop-in header title
      description={`Purchase ${count} items`} // the pop-in header subtitle
      image={icon} // the pop-in header image (default none)
      panelLabel="Pay" // prepended to the amount in the bottom pay button
      amount={total} // cents
      currency="USD"
      locale="en"
      shippingAddress
      billingAddress
      zipCode
      allowRememberMe
    >
      <Button variant="outlined" color="primary">
        Checkout for ${total / 100}
      </Button>
    </StripeCheckout>
  );
};

export default CheckoutComponent;
