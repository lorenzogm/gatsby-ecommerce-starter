const categories = require('../../../src/constants/categories')
const colors = require('../../../src/constants/colors')

const defaultProduct = {
  name: 'Fox Kid T-Shirt',
  caption: 'caption',
  description: 'description',
  images: [
    'https://instagram.fzrh1-1.fna.fbcdn.net/v/t51.2885-15/e35/80642485_714706385686918_7996339476676308548_n.jpg?_nc_ht=instagram.fzrh1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=SNXZ6zmCBCYAX9sV-j_&oh=95f80b0facad9d11f0d29fea38728972&oe=5EBC3650',
  ],
  metadata: {
    defaultColor: colors.WHITE.slug,
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
        size: '3-4 Years',
        price: 1500,
      },
      {
        size: '5-6 years',
        price: 1500,
      },
      {
        size: '7-8 years',
        price: 1500,
      },
      {
        size: '9-10 years',
        price: 1500,
      },
      {
        size: '11-12 years',
        price: 1500,
      },
    ],
  },
]

const generateProductsAndSkus = require('../generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
