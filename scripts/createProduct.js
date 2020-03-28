const createSkusForOneProduct = require('./createSkusForOneProduct')

const createProduct = async ({ stripe, product: { skus, ...rest } }) => {
  await stripe.products.create(rest)
  // eslint-disable-next-line no-console
  console.log('')
  // eslint-disable-next-line no-console
  console.log(`"${rest.name}" product created`)

  await createSkusForOneProduct({ stripe, product: { ...rest, skus } })
  await new Promise((r) => setTimeout(r, 1000))
}

module.exports = createProduct
