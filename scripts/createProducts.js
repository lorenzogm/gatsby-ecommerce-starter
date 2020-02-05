const createProducts = async ({ stripe, products }) => {
  const productListCreated = await Promise.all(products.map(({ skus, ...product }) => stripe.products.create(product)))
  console.log(`${productListCreated.length} products created`)
}

module.exports = createProducts
