const stripe = require('../services/stripe')

/**
 * Returns list of skus with product fields expanded.
 */
module.exports.handler = (event, context, callback) => {
  stripe.skus.list(
    {
      active: true,
      limit: 100, // max allowed
      expand: ['data.product'],
    },
    (err, result) => {
      const response = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }

      if (err) {
        callback(null, { ...response, statusCode: 500, body: JSON.stringify({ error: err.message }) })
      } else {
        callback(null, { ...response, statusCode: 200, body: JSON.stringify({ data: result.data }) })
      }
    },
  )
}
