const createSkusForOneProduct = async ({ stripe, product }) => {
  const skuListCreated = await Promise.all(product.skus.map((sku) => stripe.skus.create(sku)))
  console.log(`${skuListCreated.length} skus created`)
}

module.exports = createSkusForOneProduct
