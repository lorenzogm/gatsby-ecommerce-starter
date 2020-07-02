import { loadStripe } from '@stripe/stripe-js'

const stripe = async () => loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

export default stripe
