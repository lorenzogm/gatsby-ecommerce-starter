const categories = require('../../../src/constants/categories')
const colors = require('../../../src/constants/colors')
const sizes = require('../../../src/constants/sizes')

const defaultProduct = {
  name: 'Save Animals T-Shirt',
  caption: 'caption',
  description: 'description',
  images: ['https://i.imgur.com/bWbOVMh.png'],
  metadata: {
    categoryId: categories.UNISEX.id,
    defaultColor: colors.BURGUNDY.id,
    defaultSize: sizes.UNISEX.MEDIUM.id,
  },
}

const defaultSku = {
  attributes: {
    category: categories.UNISEX.id,
    name: defaultProduct.name,
  },
}

const skus = [
  {
    color: colors.GREY_MELANGE,
    image: 'https://i.imgur.com/q8u8Dpe.png',
    sizes: [
      {
        size: sizes.UNISEX.SMALL.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.MEDIUM.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.LARGE.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.XLARGE.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.XXLARGE.id,
        price: 1500,
      },
    ],
  },
  {
    color: colors.LIGHT_CHARCOAL,
    image: 'https://i.imgur.com/XdWQcEd.png',
    sizes: [
      {
        size: sizes.UNISEX.SMALL.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.MEDIUM.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.LARGE.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.XLARGE.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.XXLARGE.id,
        price: 1500,
      },
    ],
  },
  {
    color: colors.NAVY,
    image: 'https://i.imgur.com/8SXaVVk.png',
    sizes: [
      {
        size: sizes.UNISEX.SMALL.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.MEDIUM.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.LARGE.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.XLARGE.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.XXLARGE.id,
        price: 1500,
      },
    ],
  },
  {
    color: colors.BURGUNDY,
    image: 'https://i.imgur.com/bWbOVMh.png',
    sizes: [
      {
        size: sizes.UNISEX.SMALL.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.MEDIUM.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.LARGE.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.XLARGE.id,
        price: 1500,
      },
      {
        size: sizes.UNISEX.XXLARGE.id,
        price: 1500,
      },
    ],
  },
]

const generateProductsAndSkus = require('../generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
