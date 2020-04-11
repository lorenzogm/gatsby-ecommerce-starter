const updateSkusForOneProduct = async ({ stripe, product }) => {
  const skuListUpdated = await Promise.all(product.skus.map(({ id, ...rest }) => stripe.skus.update(id, rest)))
  // eslint-disable-next-line no-console
  console.log(`${skuListUpdated.length} skus updated`)
}

module.exports = updateSkusForOneProduct
