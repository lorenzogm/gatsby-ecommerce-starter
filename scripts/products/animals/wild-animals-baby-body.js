const categories = require('../../../src/constants/categories')
const colors = require('../../../src/constants/colors')
const sizes = require('../../../src/constants/sizes')

const defaultProduct = {
  name: 'Wild Animals Baby Body',
  caption: 'caption',
  description: 'description',
  images: ['https://i.imgur.com/WVZ1prc.jpg'],
  metadata: {
    defaultColor: colors.WHITE.id,
    defaultSize: sizes.BABIES.MONTHS_6_12.id,
  },
}

const defaultSku = {
  attributes: {
    category: categories.BABIES.id,
    name: defaultProduct.name,
  },
}

const skus = [
  {
    color: colors.WHITE,
    image: defaultProduct.images[0],
    sizes: [
      {
        size: sizes.BABIES.MONTHS_0_3.id,
        price: 1500,
      },
      {
        size: sizes.BABIES.MONTHS_3_6.id,
        price: 1500,
      },
      {
        size: sizes.BABIES.MONTHS_6_12.id,
        price: 1500,
      },
      {
        size: sizes.BABIES.MONTHS_12_18.id,
        price: 1500,
      },
    ],
  },
]

const generateProductsAndSkus = require('../generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
