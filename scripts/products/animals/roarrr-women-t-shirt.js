const categories = require('../../../src/constants/categories')
const colors = require('../../../src/constants/colors')

const defaultProduct = {
  name: 'Roarrr Women T-Shirt',
  caption: 'caption',
  description: 'description',
  images: [
    'https://instagram.fzrh1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/79363843_586759011869466_6124695461737797898_n.jpg?_nc_ht=instagram.fzrh1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=2H3lIJCT9KwAX9aWVu6&oh=8ce9ccc6d69b651b8fbc68ced55c1b39&oe=5ED9EA4F',
  ],
  metadata: {
    defaultColor: colors.GREY_MELANGE.slug,
  },
}

const defaultSku = {
  attributes: {
    category: categories.WOMEN.slug,
    name: defaultProduct.name,
  },
}

const skus = [
  {
    color: colors.GREY_MELANGE,
    image: defaultProduct.images[0],
    sizes: [
      {
        size: 'S',
        price: 1500,
      },
      {
        size: 'M',
        price: 1500,
      },
      {
        size: 'L',
        price: 1500,
      },
      {
        size: 'XL',
        price: 1500,
      },
    ],
  },
  {
    color: colors.LIGHT_CHARCOAL,
    image: defaultProduct.images[0],
    sizes: [
      {
        size: 'S',
        price: 1500,
      },
      {
        size: 'M',
        price: 1500,
      },
      {
        size: 'L',
        price: 1500,
      },
      {
        size: 'XL',
        price: 1500,
      },
    ],
  },
  {
    color: colors.NAVY,
    image: defaultProduct.images[0],
    sizes: [
      {
        size: 'S',
        price: 1500,
      },
      {
        size: 'M',
        price: 1500,
      },
      {
        size: 'L',
        price: 1500,
      },
      {
        size: 'XL',
        price: 1500,
      },
    ],
  },
]

const generateProductsAndSkus = require('../generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
