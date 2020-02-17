const categories = require('../../../src/constants/categories')
const colors = require('../../../src/constants/colors')
const sizes = require('../../../src/constants/sizes')

const defaultProduct = {
  name: 'Fox Kid T-Shirt',
  caption: 'caption',
  description: 'description',
  images: [
    'https://instagram.fzrh1-1.fna.fbcdn.net/v/t51.2885-15/e35/80642485_714706385686918_7996339476676308548_n.jpg?_nc_ht=instagram.fzrh1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=SNXZ6zmCBCYAX9sV-j_&oh=95f80b0facad9d11f0d29fea38728972&oe=5EBC3650',
  ],
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
