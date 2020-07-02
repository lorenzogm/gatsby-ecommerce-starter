const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

stripe.setMaxNetworkRetries(2)

module.exports = stripe
