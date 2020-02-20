import React from 'react'
import PropTypes from 'prop-types'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Button from '@material-ui/core/Button'
import { useCartContext } from 'context/CartContext'

import * as S from './styles'

const AddToCartButton = ({ skuIdSelectedWithSize }) => {
  const { add, toggle } = useCartContext()

  return (
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      endIcon={<ShoppingCart style={{ fontSize: 40 }} />}
      onClick={() => {
        add(skuIdSelectedWithSize)
        toggle(true)
      }}
    >
      <S.ButtonText>Add To Cart</S.ButtonText>
    </Button>
  )
}

AddToCartButton.propTypes = {
  skuIdSelectedWithSize: PropTypes.string.isRequired,
}

export default AddToCartButton
