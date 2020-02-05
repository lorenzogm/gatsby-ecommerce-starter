const productSkip = ['TSH-MYF', 'BOD-MYF']

const deleteAllProducts = async ({ stripe }) => {
  const productList = await stripe.products.list()
  const productListDelete = await Promise.all(
    productList.data
      .filter(product => productSkip.indexOf(product.id) === -1)
      .map(product => stripe.products.del(product.id)),
  )
  console.log(`${productListDelete.length} products deleted`)
}

module.exports = deleteAllProducts
