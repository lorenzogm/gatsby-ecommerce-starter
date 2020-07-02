import { loadStripe } from '@stripe/stripe-js'

const stripe = async () => loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

export default stripe
