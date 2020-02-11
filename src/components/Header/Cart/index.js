import React, { useContext } from 'react'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import { CartContext } from 'components/CartProvider'
import Checkout from 'components/Checkout'
import CartItem from 'components/CartItem'

const Cart = () => {
  const { cart, count, mode, toggle } = useContext(CartContext)
  return (
    <>
      <Button onClick={() => toggle()}>
        <ShoppingCartIcon />
      </Button>
      <div
        style={{
          display: mode ? 'initial' : 'none',
          position: 'fixed',
          right: 0,
          top: 0,
          height: '100vh',
          padding: '2rem',
          backgroundColor: 'white',
          maxWidth: 400,
          width: '100%',
          zIndex: 1,
        }}
      >
        <h1>cart</h1>
        {count === 0 && <span>No items in cart.</span>}
        {cart.map(([sku, quantity]) => sku && <CartItem key={sku.id} sku={sku} quantity={quantity} />)}
        <Checkout />
      </div>
    </>
  )
}

export default Cart
