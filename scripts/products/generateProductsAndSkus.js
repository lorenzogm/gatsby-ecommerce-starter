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
        image,
        attributes: {
          ...defaultSku.attributes,
          color: color.slug,
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
    skus: skusGenerated.map(sku => ({
      ...sku,
      product: productId,
    })),
  }

  return product
}

module.exports = generateProductsAndSkus
