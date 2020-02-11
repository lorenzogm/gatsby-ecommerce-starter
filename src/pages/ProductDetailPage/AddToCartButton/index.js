import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import { CartContext } from 'components/CartProvider'

const AddToCartButton = ({ product }) => {
  const { add, toggle } = useContext(CartContext)

  return (
    <Button
      onClick={() => {
        add(product.skus[0].id)
        toggle(true)
      }}
    >
      Add To Cart
    </Button>
  )
}

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    skus: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired).isRequired,
  }).isRequired,
}

export default AddToCartButton
