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
    color: colors.NAVY,
    image: 'https://i.imgur.com/6oeMXJv.png',
    sizes: defaultSizes,
  },
  {
    color: colors.GREY_MELANGE,
    image: 'https://i.imgur.com/JrHQbDU.png',
    sizes: defaultSizes,
  },
  {
    color: colors.LIGHT_CHARCOAL,
    image: 'https://i.imgur.com/KwIFAJK.png',
    sizes: defaultSizes,
  },
]

const defaultProduct = {
  name: 'Roarrr Shape Women T-Shirt',
  caption: 'caption',
  description: 'description',
  images: [skus[0].image],
  metadata: {
    categoryId: categories.WOMEN.id,
    defaultColor: colors.NAVY.id,
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
