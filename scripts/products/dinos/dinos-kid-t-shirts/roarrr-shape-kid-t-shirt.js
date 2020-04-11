const categories = require('../../../../src/constants/categories')
const colors = require('../../../../src/constants/colors')
const sizes = require('../../../../src/constants/sizes')

const defaultSizes = [
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
]

const skus = [
  {
    color: colors.BURGUNDY,
    image: 'https://i.imgur.com/ZQueMhY.png',
    sizes: defaultSizes,
  },
  {
    color: colors.BLUE_FADED,
    image: 'https://i.imgur.com/F6fjbbm.png',
    sizes: defaultSizes,
  },
  {
    color: colors.PINK_HOT,
    image: 'https://i.imgur.com/wDKcK9D.png',
    sizes: defaultSizes,
  },
  {
    color: colors.GREY_MELANGE,
    image: 'https://i.imgur.com/oZYmNpQ.png',
    sizes: defaultSizes,
  },
  {
    color: colors.GREEN_BOTTLE,
    image: 'https://i.imgur.com/3RTVX7X.png',
    sizes: defaultSizes,
  },
]

const defaultProduct = {
  name: 'Roarrr Shape Kid T-shirt',
  caption: 'caption',
  description: 'description',
  images: [skus[0].image],
  metadata: {
    categoryId: categories.KIDS.id,
    defaultColor: colors.PINK_HOT.id,
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
