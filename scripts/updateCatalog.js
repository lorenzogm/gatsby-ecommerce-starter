const path = require('path')

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({ path: path.join(__dirname, '../.env.development') })

const stripe = require('stripe')(process.env.GATSBY_STRIPE_SECRET_KEY)

stripe.setMaxNetworkRetries(2)

const updateProduct = require('./lib/updateProduct')

const products = require('./products')

const updateCatalog = async () => {
  // eslint-disable-next-line no-console
  console.log('Starting...')
  // eslint-disable-next-line no-console
  console.log('')

  try {
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index <= products.length; index++) {
      // eslint-disable-next-line no-await-in-loop
      await updateProduct({ stripe, product: products[index] })
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

updateCatalog()
