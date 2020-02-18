const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

stripe.setMaxNetworkRetries(2)

module.exports = stripe
