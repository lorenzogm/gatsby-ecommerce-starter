const createSkusForManyProducts = async ({ stripe, products }) => {
  const skus = products.reduce((acc, product) => [...acc, ...product.skus], [])
  const skuListCreated = await Promise.all(skus.map(sku => stripe.skus.create(sku)))
  console.log(`${skuListCreated.length} skus created`)
}

module.exports = createSkusForManyProducts
