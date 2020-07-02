import React from 'react'
import Typography from '@material-ui/core/Typography'

import { useCartContext } from 'context/CartContext'
import { useTranslation } from 'react-i18next'

const CartTitle = () => {
  const { t } = useTranslation()
  const [{ cartSkuQuantity }] = useCartContext()

  return <Typography>{`${t('Your cart')} (${t('{{ cartSkuQuantity }} items', { cartSkuQuantity })})`}</Typography>
}

export default CartTitle
