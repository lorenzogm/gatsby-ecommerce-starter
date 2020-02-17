const categories = require('../../../src/constants/categories')
const colors = require('../../../src/constants/colors')
const sizes = require('../../../src/constants/sizes')

const defaultProduct = {
  name: 'Fox Baby Body',
  caption: 'caption',
  description: 'description',
  images: [
    'https://instagram.fqls1-1.fna.fbcdn.net/v/t51.2885-15/e35/80364777_173562017080089_6641569809904366430_n.jpg?_nc_ht=instagram.fqls1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=qGPqwhQRB2sAX-fo-O6&oh=10450fb08120342378bb93d929168c81&oe=5E955F42',
  ],
  metadata: {
    defaultColor: colors.WHITE.slug,
    defaultSize: sizes.BABIES.MONTHS_6_12.slug,
  },
}

const defaultSku = {
  attributes: {
    category: categories.BABIES.slug,
    name: defaultProduct.name,
  },
}

const skus = [
  {
    color: colors.WHITE,
    image: defaultProduct.images[0],
    sizes: [
      {
        size: sizes.BABIES.MONTHS_0_3.slug,
        price: 1500,
      },
      {
        size: sizes.BABIES.MONTHS_3_6.slug,
        price: 1500,
      },
      {
        size: sizes.BABIES.MONTHS_6_12.slug,
        price: 1500,
      },
      {
        size: sizes.BABIES.MONTHS_12_18.slug,
        price: 1500,
      },
    ],
  },
]

const generateProductsAndSkus = require('../generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
