const stripe = require('stripe')(process.env._STRIPE_SECRET_KEY);

/**
 * Returns list of skus with product fields expanded.
 */
const skuList = (req, res) => {
  stripe.skus.list(
    {
      limit: 100, // max allowed
      expand: ['data.product'],
    },
    (err, result) => {
      let statusCode, body;

      if (err) {
        statusCode = 500;
        body = JSON.stringify({
          error: err.message,
        });
      } else {
        statusCode = 200;
        body = JSON.stringify({
          data: result.data,
        });
      }

      res.set('Access-Control-Allow-Origin', '*');
      res.send(body);
    },
  );
};

module.exports = skuList;
