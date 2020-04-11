const categories = require('../../../../src/constants/categories')
const colors = require('../../../../src/constants/colors')
const sizes = require('../../../../src/constants/sizes')

const defaultSizes = [
  {
    size: sizes.WOMEN.SMALL.id,
    price: 2000,
  },
  {
    size: sizes.WOMEN.MEDIUM.id,
    price: 2000,
  },
  {
    size: sizes.WOMEN.LARGE.id,
    price: 2000,
  },
  {
    size: sizes.WOMEN.XLARGE.id,
    price: 2000,
  },
  {
    size: sizes.WOMEN.XXLARGE.id,
    price: 2000,
  },
]

const skus = [
  {
    color: colors.GREY_MELANGE,
    image: 'https://i.imgur.com/c3IOIdv.png',
    sizes: defaultSizes,
  },
  {
    color: colors.LIGHT_CHARCOAL,
    image: 'https://i.imgur.com/XNedL8S.png',
    sizes: defaultSizes,
  },
  {
    color: colors.NAVY,
    image: 'https://i.imgur.com/JRf9AYb.png',
    sizes: defaultSizes,
  },
]

const defaultProduct = {
  name: 'Save Animals Women T-Shirt',
  caption: 'caption',
  description: 'description',
  images: [skus[1].image],
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

const generateProductsAndSkus = require('../../../lib/generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
