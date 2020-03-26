import React from 'react'
import Typography from '@material-ui/core/Typography'

import { useCartContext } from 'context/CartContext'

const CartTitle = () => {
  const [{ cartSkuQuantity }] = useCartContext()

  return <Typography>Your cart ({cartSkuQuantity} items)</Typography>
}

export default CartTitle
