const categories = require('../../../src/constants/categories')
const colors = require('../../../src/constants/colors')
const sizes = require('../../../src/constants/sizes')

const defaultProduct = {
  name: 'Save Animals Women T-Shirt',
  caption: 'caption',
  description: 'description',
  images: ['https://i.imgur.com/3PEk1RY.png'],
  metadata: {
    categoryId: categories.WOMEN.id,
    defaultColor: colors.GREY_MELANGE.id,
    defaultSize: sizes.WOMEN.MEDIUM.id,
  },
}

const defaultSku = {
  attributes: {
    category: categories.WOMEN.id,
    name: defaultProduct.name,
  },
}

const skus = [
  {
    color: colors.GREY_MELANGE,
    image: 'https://i.imgur.com/3PEk1RY.png',
    sizes: [
      {
        size: sizes.WOMEN.SMALL.id,
        price: 1500,
      },
      {
        size: sizes.WOMEN.MEDIUM.id,
        price: 1500,
      },
      {
        size: sizes.WOMEN.LARGE.id,
        price: 1500,
      },
      {
        size: sizes.WOMEN.XLARGE.id,
        price: 1500,
      },
      {
        size: sizes.WOMEN.XXLARGE.id,
        price: 1500,
      },
    ],
  },
  {
    color: colors.LIGHT_CHARCOAL,
    image: 'https://i.imgur.com/ZEUMKG2.png',
    sizes: [
      {
        size: sizes.WOMEN.SMALL.id,
        price: 1500,
      },
      {
        size: sizes.WOMEN.MEDIUM.id,
        price: 1500,
      },
      {
        size: sizes.WOMEN.LARGE.id,
        price: 1500,
      },
      {
        size: sizes.WOMEN.XLARGE.id,
        price: 1500,
      },
      {
        size: sizes.WOMEN.XXLARGE.id,
        price: 1500,
      },
    ],
  },
  {
    color: colors.NAVY,
    image: 'https://i.imgur.com/K4QTvQ6.png',
    sizes: [
      {
        size: sizes.WOMEN.SMALL.id,
        price: 1500,
      },
      {
        size: sizes.WOMEN.MEDIUM.id,
        price: 1500,
      },
      {
        size: sizes.WOMEN.LARGE.id,
        price: 1500,
      },
      {
        size: sizes.WOMEN.XLARGE.id,
        price: 1500,
      },
      {
        size: sizes.WOMEN.XXLARGE.id,
        price: 1500,
      },
    ],
  },
]

const generateProductsAndSkus = require('../generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
