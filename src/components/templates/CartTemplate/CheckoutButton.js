/* global window */

import { useTranslation } from 'gatsby-plugin-react-i18next'
import Button from '@material-ui/core/Button'
import React from 'react'

import stripe from 'services/stripe-client'

export default function CheckoutButton({ cartSkuList }) {
  const { t } = useTranslation()

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
      {t('Checkout')}
    </Button>
  )
}
