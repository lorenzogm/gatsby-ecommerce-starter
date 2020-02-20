import React from 'react'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import Checkout from 'components/Checkout'
import CartItem from 'components/CartItem'
import { useCartContext } from 'context/CartContext'

import * as S from './styles'

const Cart = () => {
  // const { cart, count, toggle } = useCartContext()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handlePopoverOpen = event => {
    console.log('handlePopoverOpen')
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    console.log('handlePopoverClose')
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  console.log(open)
  const popoverId = 'mouse-over-popover'

  return (
    <>
      <Button
        aria-describedby="open-cart"
        aria-haspopup="true"
        aria-owns={open && popoverId}
        // onMouseEnter={handlePopoverOpen}
        // onMouseLeave={handlePopoverClose}
      >
        <ShoppingCartIcon />
      </Button>
      <S.Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        // onClose={handlePopoverClose}
        disableRestoreFocus
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <h1>cart</h1>
        {/* {count === 0 && <span>No items in cart.</span>}
        {cart.map(([sku, quantity]) => sku && <CartItem key={sku.id} sku={sku} quantity={quantity} />)}
        <Checkout /> */}
      </S.Popover>
    </>
  )
}

export default Cart
