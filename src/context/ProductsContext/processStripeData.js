/** Normalize structure of live data sourced from Stripe */
const processStripeData = (data, products) => {
  const liveProducts = {}
  const liveSkus = {}
  data.forEach(source => {
    if (source.product.active) {
      const { id } = source.product
      const target = products[id].skus.find(x => x.id === source.id)
      const updatedSku = Object.assign(source, target)
      if (!liveProducts[id]) {
        // eslint-disable-next-line no-param-reassign
        source.product.slug = products[id].slug
        liveProducts[id] = { ...source.product, skus: [] }
      }
      liveProducts[id].skus.push(updatedSku)
      liveSkus[updatedSku.id] = updatedSku
    }
  })
  return [liveProducts, liveSkus]
}

export default processStripeData
