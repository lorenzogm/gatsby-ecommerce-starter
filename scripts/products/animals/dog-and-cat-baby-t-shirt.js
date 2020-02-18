const categories = require('../../../src/constants/categories')
const colors = require('../../../src/constants/colors')
const sizes = require('../../../src/constants/sizes')

const defaultProduct = {
  name: 'Dog & Cat Baby T-Shirt',
  caption: 'caption',
  description: 'description',
  images: ['https://i.imgur.com/vgfz90g.png'],
  metadata: {
    defaultColor: colors.WHITE.slug,
    defaultSize: sizes.BABIES.MONTHS_6_12.slug,
  },
}

const defaultSku = {
  attributes: {
    category: categories.BABIES.slug,
    name: defaultProduct.name,
  },
}

const skus = [
  {
    color: colors.WHITE,
    image: defaultProduct.images[0],
    sizes: [
      {
        size: sizes.BABIES.MONTHS_0_3.slug,
        price: 1500,
      },
      {
        size: sizes.BABIES.MONTHS_3_6.slug,
        price: 1500,
      },
      {
        size: sizes.BABIES.MONTHS_6_12.slug,
        price: 1500,
      },
      {
        size: sizes.BABIES.MONTHS_12_18.slug,
        price: 1500,
      },
    ],
  },
]

const generateProductsAndSkus = require('../generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
