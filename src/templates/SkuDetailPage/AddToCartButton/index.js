import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Button from '@material-ui/core/Button'
import { useCartContext } from 'context/CartContext'

import * as S from './styles'

const AddToCartButton = ({ skuIdSelectedWithSize }) => {
  const { t } = useTranslation()
  const [, dispatch] = useCartContext()

  const onClick = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { skuId: skuIdSelectedWithSize, quantity: 1 } })
  }

  return (
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      endIcon={<ShoppingCart style={{ fontSize: 40 }} />}
      onClick={onClick}
    >
      <S.ButtonText>{t('Add To Cart')}</S.ButtonText>
    </Button>
  )
}

AddToCartButton.propTypes = {
  skuIdSelectedWithSize: PropTypes.string.isRequired,
}

export default AddToCartButton
