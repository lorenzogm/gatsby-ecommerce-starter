const createSkusForOneProduct = require('./createSkusForOneProduct')

const createProduct = async ({ stripe, product: { skus, ...rest } }) => {
  await stripe.products.create(rest)
  console.log('')
  console.log(`"${rest.name}" product created`)

  await createSkusForOneProduct({ stripe, product: { ...rest, skus } })
  await new Promise(r => setTimeout(r, 2000))
}

module.exports = createProduct
