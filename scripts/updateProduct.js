const updateSkusForOneProduct = require('./updateSkusForOneProduct')

const updateProduct = async ({ stripe, product: { skus, id, type, ...rest } }) => {
  await stripe.products.update(id, rest)
  // eslint-disable-next-line no-console
  console.log('')
  // eslint-disable-next-line no-console
  console.log(`"${rest.name}" product updated`)

  await updateSkusForOneProduct({ stripe, product: { ...rest, skus, id, type } })
  await new Promise((r) => setTimeout(r, 1000))
}

module.exports = updateProduct
