/* eslint-disable no-await-in-loop */
const productSkip = ['TSH-MYF', 'BOD-MYF']

const deleteAllProducts = async ({ stripe }) => {
  // delete all skus
  let isAnyProductLeft = true
  while (isAnyProductLeft) {
    const productList = await stripe.products.list({ limit: 10 })

    const productListDelete = await Promise.all(
      productList.data
        .filter((product) => productSkip.indexOf(product.id) === -1)
        .map((product) => stripe.products.del(product.id)),
    )

    // eslint-disable-next-line no-console
    console.log(`${productListDelete.length} products deleted`)

    if (!productList.has_more) {
      isAnyProductLeft = false
      break
    }

    await new Promise((r) => setTimeout(r, 1000))
  }
}

module.exports = deleteAllProducts
