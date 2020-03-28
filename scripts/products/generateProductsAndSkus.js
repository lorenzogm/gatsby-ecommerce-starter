const slug = require('slug')

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
  const productId = slug(defaultProduct.name, slug.defaults.modes.rfc3986)

  const skusGenerated = skus.reduce((acc, { color, image, sizes }) => {
    return [
      ...acc,
      ...sizes.map(({ size, price }) => ({
        ...globalSku,
        ...defaultSku,
        id: slug(`${defaultSku.attributes.name} ${color.name} ${size}`, slug.defaults.modes.rfc3986),
        image,
        attributes: {
          ...defaultSku.attributes,
          color: color.id,
          size,
          name: `${defaultSku.attributes.name} ${color.name}`,
        },
        price,
      })),
    ]
  }, [])

  const product = {
    ...globalProduct,
    ...defaultProduct,
    id: productId,
    skus: skusGenerated.map((sku) => ({
      ...sku,
      product: productId,
    })),
  }

  return product
}

module.exports = generateProductsAndSkus
