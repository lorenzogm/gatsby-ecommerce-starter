const stripe = require('stripe')('sk_test_558JZshYB9voUZRf4u51NRJB00TnEWkTQC')
const animals = require('./products/animals')

const products = [...animals]

const seed = async () => {
  console.log('Starting...')
  console.log('')
  // delete all skus
  const skuList = await stripe.skus.list()
  const skuListDelete = await Promise.all(skuList.data.map(sku => stripe.skus.del(sku.id)))
  console.log(`${skuListDelete.length} skus deleted`)

  // delete all products
  const productList = await stripe.products.list()
  const productListDelete = await Promise.all(productList.data.map(product => stripe.products.del(product.id)))
  console.log(`${productListDelete.length} products deleted`)

  // create products
  const productListCreated = await Promise.all(products.map(({ skus, ...product }) => stripe.products.create(product)))
  console.log(`${productListCreated.length} products created`)

  // create skus
  const skus = products.reduce((acc, product) => [...acc, ...product.skus], [])
  const skuListCreated = await Promise.all(skus.map(sku => stripe.skus.create(sku)))
  console.log(`${skuListCreated.length} skus created`)

  console.log('')
  console.log('DONE')
}

seed()
