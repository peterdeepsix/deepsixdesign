const stripe = require('stripe')(process.env._STRIPE_SECRET_KEY);

/**
 * Captures payment token and creates order.
 */
const orderCreate = async (req, res) => {
  const requestBody = JSON.parse(req.body);
  const { id, email } = requestBody.token;
  const { currency, items, shipping } = requestBody.order;

  // Create order
  try {
    const order = await stripe.orders.create({
      currency,
      items,
      shipping,
      email,
    });

    // Charge order
    stripe.orders.pay(order.id, {
      source: id,
    });

    res.set('Access-Control-Allow-Origin', '*');
    res.send(
      JSON.stringify({
        data: order,
        message: 'Order placed successfully!',
      }),
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = orderCreate;
