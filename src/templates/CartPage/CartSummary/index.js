import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import { useCartContext } from 'context/CartContext'
import { useProductsContext } from 'context/ProductsContext'

import * as S from './styles'
import getSummaryPrices from './getSummaryPrices'
import CheckoutButton from './CheckoutButton'

const CartSummary = () => {
  const { t } = useTranslation()
  const { skus } = useProductsContext()
  const [{ cartSkuList }] = useCartContext()

  const { subtotal, delivery, total } = getSummaryPrices({ skus, cartSkuList })

  return (
    <>
      <Typography variant="h5">{t('Total')}</Typography>
      <S.Row>
        <Typography>{t('Subtotal')}</Typography>
        <Typography>{subtotal}</Typography>
      </S.Row>
      <S.Row>
        <Typography>{t('Delivery')}</Typography>
        <Typography>{delivery}</Typography>
      </S.Row>
      <S.Row>
        <Typography>{t('Total (VAT Included)')}</Typography>
        <Typography>{total}</Typography>
      </S.Row>
      <S.Row>
        <CheckoutButton />
      </S.Row>
    </>
  )
}

export default CartSummary
