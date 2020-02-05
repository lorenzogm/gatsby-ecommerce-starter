const defaultProduct = {
  name: 'Fox Baby Body',
  caption: 'caption',
  description: 'description',
  images: [
    'https://instagram.fqls1-1.fna.fbcdn.net/v/t51.2885-15/e35/80364777_173562017080089_6641569809904366430_n.jpg?_nc_ht=instagram.fqls1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=qGPqwhQRB2sAX-fo-O6&oh=10450fb08120342378bb93d929168c81&oe=5E955F42',
  ],
}

const defaultSku = {
  attributes: {
    category: 'BABIES',
    name: defaultProduct.name,
  },
}

const skus = [
  {
    color: 'White',
    image: defaultProduct.images[0],
    sizes: [
      {
        size: '0-3 Months',
        price: 1500,
      },
      {
        size: '3-6 Months',
        price: 1500,
      },
      {
        size: '6-12 Months',
        price: 1500,
      },
      {
        size: '12-18 Months',
        price: 1500,
      },
    ],
  },
]

const generateProductsAndSkus = require('../generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
