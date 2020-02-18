const categories = require('../../../src/constants/categories')
const colors = require('../../../src/constants/colors')
const sizes = require('../../../src/constants/sizes')

const defaultProduct = {
  name: 'Lion Kid T-Shirt',
  caption: 'caption',
  description: 'description',
  images: [''],
  metadata: {
    defaultColor: colors.WHITE.slug,
    defaultSize: sizes.KIDS.YEARS_3_4.slug,
  },
}

const defaultSku = {
  attributes: {
    category: categories.KIDS.slug,
    name: defaultProduct.name,
  },
}

const skus = [
  {
    color: colors.WHITE,
    image: defaultProduct.images[0],
    sizes: [
      {
        size: sizes.KIDS.YEARS_3_4.slug,
        price: 1500,
      },
      {
        size: sizes.KIDS.YEARS_5_6.slug,
        price: 1500,
      },
      {
        size: sizes.KIDS.YEARS_7_8.slug,
        price: 1500,
      },
      {
        size: sizes.KIDS.YEARS_9_10.slug,
        price: 1500,
      },
      {
        size: sizes.KIDS.YEARS_11_12.slug,
        price: 1500,
      },
    ],
  },
]

const generateProductsAndSkus = require('../generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
