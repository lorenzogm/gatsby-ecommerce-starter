const slugify = require('slugify')

const globalProduct = {
  attributes: ['name', 'category', 'size', 'color'],
  type: 'good',
}

const globalSku = {
  currency: 'eur',
  inventory: {
    type: 'infinite',
  },
}

const generateProductsAndSkus = ({ defaultProduct, defaultSku, skus }) => {
  const productId = slugify(defaultProduct.name, {
    lower: true,
  })

  const skusGenerated = skus.reduce((acc, { color, image, sizes }) => {
    return [
      ...acc,
      ...sizes.map(({ size, price }) => ({
        ...globalSku,
        ...defaultSku,
        attributes: { ...defaultSku.attributes, color, image, size },
        price,
      })),
    ]
  }, [])

  const product = {
    ...globalProduct,
    ...defaultProduct,
    id: productId,
    skus: skusGenerated.map(sku => ({
      ...defaultSku,
      ...sku,
      product: productId,
      attributes: { ...defaultSku.attributes, ...sku.attributes },
    })),
  }

  return product
}

module.exports = generateProductsAndSkus
