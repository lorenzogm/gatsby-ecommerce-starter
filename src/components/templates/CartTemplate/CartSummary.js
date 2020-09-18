import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import priceFormat from 'utils/priceFormat'

import { Row } from './CartSummary.styles'

export default function CartSummary({ skus, cartSkuList }) {
  const { t } = useTranslation()

  const { subtotal, delivery, total } = getSummaryPrices({ skus, cartSkuList })

  return (
    <>
      <Typography variant="h5">{t('Total')}</Typography>
      <Row>
        <Typography>{t('Subtotal')}</Typography>
        <Typography>{subtotal}</Typography>
      </Row>
      <Row>
        <Typography>{t('Delivery')}</Typography>
        <Typography>{delivery}</Typography>
      </Row>
      <Row>
        <Typography>{t('Total (VAT Included)')}</Typography>
        <Typography>{total}</Typography>
      </Row>
    </>
  )
}

function getSummaryPrices({ skus, cartSkuList }) {
  const subtotal = cartSkuList.reduce((acc, item) => acc + item.quantity * skus[item.skuId].price, 0)
  const delivery = subtotal < 10000 ? 990 : 0
  const total = subtotal + delivery

  return { subtotal: priceFormat(subtotal), delivery: priceFormat(delivery), total: priceFormat(total) }
}
