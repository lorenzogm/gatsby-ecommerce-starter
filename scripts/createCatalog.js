const path = require('path')

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({ path: path.join(__dirname, '../.env.development') })

const stripe = require('stripe')(process.env.GATSBY_STRIPE_SECRET_KEY)

stripe.setMaxNetworkRetries(2)

const deleteAllSkus = require('./lib/deleteAllSkus')
const deleteAllProducts = require('./lib/deleteAllProducts')
const createProduct = require('./lib/createProduct')

const products = require('./products')

const createCatalog = async () => {
  // eslint-disable-next-line no-console
  console.log('Starting...')
  // eslint-disable-next-line no-console
  console.log('')

  try {
    await deleteAllSkus({ stripe })
    await deleteAllProducts({ stripe })

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index <= products.length; index++) {
      // eslint-disable-next-line no-await-in-loop
      await createProduct({ stripe, product: products[index] })
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }

  // eslint-disable-next-line no-console
  console.log('')
  // eslint-disable-next-line no-console
  console.log('DONE')
}

createCatalog()
