/* global fetch */

import { useEffect, useState } from 'react'
import getProducts from './getProducts'

/** Query live data from Stripe and update products */
const updateProducts = async ({ setState }) => {
  const stripeSkusList = await fetch('/.netlify/functions/stripeSkusList')
    .then((response) => response.json())
    // eslint-disable-next-line no-console
    .catch((errorFetch) => console.error(errorFetch))

  const data = getProducts(stripeSkusList.data)

  setState({ loading: false, data })
}

const useFetchProductsFromStripe = () => {
  const [state, setState] = useState({ loading: true, data: null })

  useEffect(() => {
    updateProducts({ setState })
  }, [])

  return state
}

export default useFetchProductsFromStripe
