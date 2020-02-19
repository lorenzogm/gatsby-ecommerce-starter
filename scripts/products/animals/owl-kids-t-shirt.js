const categories = require('../../../src/constants/categories')
const colors = require('../../../src/constants/colors')
const sizes = require('../../../src/constants/sizes')

const defaultProduct = {
  name: 'Owl Kid T-Shirt',
  caption: 'caption',
  description: 'description',
  images: [''],
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

const skus = [
  {
    color: colors.WHITE,
    image: defaultProduct.images[0],
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

const generateProductsAndSkus = require('../generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
