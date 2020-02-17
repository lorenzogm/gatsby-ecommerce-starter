import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Button from '@material-ui/core/Button'
import { CartContext } from 'components/CartProvider'

import * as S from './styles'

const AddToCartButton = ({ product }) => {
  const { add, toggle } = useContext(CartContext)

  return (
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      endIcon={<ShoppingCart style={{ fontSize: 40 }} />}
      onClick={() => {
        add(product.skuDefaultId)
        toggle(true)
      }}
    >
      <S.ButtonText>Add To Cart</S.ButtonText>
    </Button>
  )
}

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    skuDefaultId: PropTypes.string.isRequired,
  }).isRequired,
}

export default AddToCartButton
