const defaultProduct = {
  name: 'Dog & Cat Kid T-Shirt',
  caption: 'caption',
  description: 'description',
  images: [
    'https://instagram.fzrh1-1.fna.fbcdn.net/v/t51.2885-15/e35/79197792_616301099116414_3384227109455936762_n.jpg?_nc_ht=instagram.fzrh1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=WDhBBxDqdWwAX_vrPjn&oh=4288db6dc8d46b3790e712c6618a1ddb&oe=5EC2AD2C',
  ],
}

const defaultSku = {
  attributes: {
    category: 'KIDS',
    name: defaultProduct.name,
  },
}

const skus = [
  {
    color: 'White',
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
