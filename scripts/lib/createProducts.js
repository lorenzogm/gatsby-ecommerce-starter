const createProducts = async ({ stripe, products }) => {
  const productListCreated = await Promise.all(products.map(({ skus, ...product }) => stripe.products.create(product)))
  // eslint-disable-next-line no-console
  console.log(`${productListCreated.length} products created`)
}

module.exports = createProducts
