import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'gatsby-plugin-react-i18next'

export default function CartTitle({ cartSkuQuantity }) {
  const { t } = useTranslation()

  return <Typography>{`${t('Your cart')} (${t('{{ cartSkuQuantity }} items', { cartSkuQuantity })})`}</Typography>
}
