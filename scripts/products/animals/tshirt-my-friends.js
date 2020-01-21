const defaultProduct = {
  id: 'TSH-MYF',
  name: 'My Friends T-Shirt',
  caption: 'caption',
  description: 'description',
  images: [
    'https://instagram.fqls1-1.fna.fbcdn.net/v/t51.2885-15/e35/80364777_173562017080089_6641569809904366430_n.jpg?_nc_ht=instagram.fqls1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=qGPqwhQRB2sAX-fo-O6&oh=10450fb08120342378bb93d929168c81&oe=5E955F42',
  ],
  attributes: ['name', 'size', 'color'],
  type: 'good',
  metadata: {
    slug: 't-shirt-my-friends',
  },
}

const defaultSku = {
  product: defaultProduct.id,
  image: defaultProduct.images[0],
  currency: 'eur',
  attributes: {
    name: defaultProduct.name,
    color: 'White',
  },
  inventory: {
    type: 'infinite',
  },
}

const skus = {
  colorId: 'WHI',
  colorName: 'White',
  skus: [
    { sizeId: 'SMA', sizeName: 'S', price: 1500 },
    { sizeId: 'MED', sizeName: 'M', price: 1500 },
    { sizeId: 'LAR', sizeName: 'L', price: 1500 },
    { sizeId: 'XLA', sizeName: 'XL', price: 1500 },
    { sizeId: '2XL', sizeName: '2XL', price: 1500 },
  ],
}

const generateProductsAndSkus = require('../generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
