import React from 'react'

import CartList from './CartList'

const CartPreview = () => {
  return (
    <>
      <h1>Your Cart</h1>
      {/* {count === 0 && <span>No items in cart.</span>} */}
      <CartList />
    </>
  )
}

export default CartPreview
