import React from 'react'
import { useCartContext } from 'context/CartContext'

export default function OrderSuccessTemplate() {
  const [, dispatch] = useCartContext()

  React.useEffect(() => {
    dispatch({ type: 'EMPTY_CART', payload: {} })
  }, [])

  return <div>Gracias</div>
}
