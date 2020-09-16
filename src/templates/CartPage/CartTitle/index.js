import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import { useCartContext } from 'context/CartContext'

const CartTitle = () => {
  const { t } = useTranslation()
  const [{ cartSkuQuantity }] = useCartContext()

  return <Typography>{`${t('Your cart')} (${t('{{ cartSkuQuantity }} items', { cartSkuQuantity })})`}</Typography>
}

export default CartTitle
