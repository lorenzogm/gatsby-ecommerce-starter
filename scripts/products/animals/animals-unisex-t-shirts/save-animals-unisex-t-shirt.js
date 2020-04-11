const categories = require('../../../../src/constants/categories')
const colors = require('../../../../src/constants/colors')
const sizes = require('../../../../src/constants/sizes')

const defaultSizes = [
  {
    size: sizes.UNISEX.SMALL.id,
    price: 2000,
  },
  {
    size: sizes.UNISEX.MEDIUM.id,
    price: 2000,
  },
  {
    size: sizes.UNISEX.LARGE.id,
    price: 2000,
  },
  {
    size: sizes.UNISEX.XLARGE.id,
    price: 2000,
  },
  {
    size: sizes.UNISEX.XXLARGE.id,
    price: 2000,
  },
]

const skus = [
  {
    color: colors.GREY_MELANGE,
    image: 'https://i.imgur.com/2IZeufp.png',
    sizes: defaultSizes,
  },
  {
    color: colors.LIGHT_CHARCOAL,
    image: 'https://i.imgur.com/d1dNdfv.png',
    sizes: defaultSizes,
  },
  {
    color: colors.NAVY,
    image: 'https://i.imgur.com/Y6rFOcy.png',
    sizes: defaultSizes,
  },
  {
    color: colors.BURGUNDY,
    image: 'https://i.imgur.com/y612pXA.png',
    sizes: defaultSizes,
  },
]

const defaultProduct = {
  name: 'Save Animals T-Shirt',
  caption: 'caption',
  description: 'description',
  images: [skus[3].image],
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

const generateProductsAndSkus = require('../../../lib/generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
