const categories = require('../../../../src/constants/categories')
const colors = require('../../../../src/constants/colors')
const sizes = require('../../../../src/constants/sizes')

const skus = [
  {
    color: colors.WHITE,
    image: 'https://i.imgur.com/zyLSTS1.png',
    sizes: [
      {
        size: sizes.KIDS.YEARS_3_4.id,
        price: 1500,
      },
      {
        size: sizes.KIDS.YEARS_5_6.id,
        price: 1500,
      },
      {
        size: sizes.KIDS.YEARS_7_8.id,
        price: 1500,
      },
      {
        size: sizes.KIDS.YEARS_9_10.id,
        price: 1500,
      },
      {
        size: sizes.KIDS.YEARS_11_12.id,
        price: 1500,
      },
    ],
  },
]

const defaultProduct = {
  name: 'Fox Kid T-Shirt',
  caption: 'caption',
  description: 'description',
  images: [skus[0].image],
  metadata: {
    categoryId: categories.KIDS.id,
    defaultColor: colors.WHITE.id,
    defaultSize: sizes.KIDS.YEARS_3_4.id,
  },
}

const defaultSku = {
  attributes: {
    category: categories.KIDS.id,
    name: defaultProduct.name,
  },
}

const generateProductsAndSkus = require('../../../lib/generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
