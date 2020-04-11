/* global window */

import React from 'react'
import Button from '@material-ui/core/Button'
import { useCartContext } from 'context/CartContext'
import stripe from 'services/stripe-client'

const CheckoutButton = () => {
  const [{ cartSkuList }] = useCartContext()

  const onClick = async () => {
    const Stripe = await stripe()

    Stripe.redirectToCheckout({
      items: cartSkuList.map(({ skuId, quantity }) => ({ sku: skuId, quantity })),
      successUrl: `${window.location.origin}/order-success`,
      cancelUrl: `${window.location.origin}/cart`,
      shippingAddressCollection: {
        allowedCountries: ['ES'],
      },
    })
  }

  return (
    <Button variant="contained" color="secondary" fullWidth onClick={onClick}>
      Checkout
    </Button>
  )
}

export default CheckoutButton
