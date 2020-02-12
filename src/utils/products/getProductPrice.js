const getProductPrice = ({ product }) => {
  if (!product || !product.skus || !product.skus[0] || !product.skus[0].price) {
    // eslint-disable-next-line no-console
    console.error(`Unexpected product: ${JSON.stringify(product)}`)
  }

  const price = product.skus.reduce(
    (minPrice, sku) => (sku.price < minPrice ? sku.price : minPrice),
    product.skus[0].price,
  )

  return `${price / 100} €`
}

export default getProductPrice
