const stripe = require('stripe')(process.env.GATSBY_STRIPE_SECRET_KEY)

stripe.setMaxNetworkRetries(2)

module.exports = stripe
