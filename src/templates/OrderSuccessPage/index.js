import React from 'react'
import { useCartContext } from 'context/CartContext'

const CartPage = () => {
  const [, dispatch] = useCartContext()

  React.useEffect(() => {
    dispatch({ type: 'EMPTY_CART', payload: {} })
  }, [])
  return <div>Gracias</div>
}

export default CartPage
