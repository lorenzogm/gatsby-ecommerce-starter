const stripe = require('../services/stripe')

/**
 * Returns list of skus with product fields expanded.
 */

const stripeSkusList = async ({ skusList }) => {
  // eslint-disable-next-line no-await-in-loop
  const { data, has_more: hasMore } = await stripe.skus.list({
    active: true,
    limit: 100, // max allowed
    expand: ['data.product'],
    starting_after: skusList.length === 0 ? undefined : skusList[skusList.length - 1].id,
  })

  const skusListNew = [...skusList, ...data]

  if (hasMore === false) {
    return { skusList: skusListNew }
  }

  return stripeSkusList({ skusList: skusListNew })
}

module.exports.handler = async () => {
  const response = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }

  try {
    const { skusList } = await stripeSkusList({ skusList: [] })
    return { ...response, statusCode: 200, body: JSON.stringify({ data: skusList }) }
  } catch (error) {
    return { ...response, statusCode: 500, body: JSON.stringify({ error: error.message }) }
  }
}
