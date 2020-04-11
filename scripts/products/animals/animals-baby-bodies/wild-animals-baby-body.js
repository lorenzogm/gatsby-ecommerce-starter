const categories = require('../../../../src/constants/categories')
const colors = require('../../../../src/constants/colors')
const sizes = require('../../../../src/constants/sizes')

const skus = [
  {
    color: colors.WHITE,
    image: 'https://i.imgur.com/fPOMaeu.png',
    sizes: [
      {
        size: sizes.BABIES.MONTHS_0_3.id,
        price: 1800,
      },
      {
        size: sizes.BABIES.MONTHS_3_6.id,
        price: 1800,
      },
      {
        size: sizes.BABIES.MONTHS_6_12.id,
        price: 1800,
      },
      {
        size: sizes.BABIES.MONTHS_12_18.id,
        price: 1800,
      },
    ],
  },
]

const defaultProduct = {
  name: 'Wild Animals Baby Body',
  caption: 'caption',
  description: 'description',
  images: [skus[0].image],
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

const generateProductsAndSkus = require('../../../lib/generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
