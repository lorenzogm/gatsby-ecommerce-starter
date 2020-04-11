import React from 'react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import SEO from 'components/SEO'
import { useCartContext } from 'context/CartContext'
import { useThemeContext } from 'context/ThemeContext'

import CartTitle from './CartTitle'
import CartList from './CartList'
import CartSummary from './CartSummary'
import CartEmpty from './CartEmpty'
import * as S from './styles'

const CartPage = () => {
  const [{ cartSkuQuantity }] = useCartContext()
  const { isMobile } = useThemeContext()

  if (cartSkuQuantity === 0) {
    return <CartEmpty />
  }

  return (
    <>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

      <Grid container spacing={3} direction={isMobile ? 'column' : 'row'}>
        {isMobile ? (
          <>
            <Grid item xs={12}>
              <CartTitle />
              <CartList />
            </Grid>
            <Divider />
            <Grid item xs={12}>
              <CartSummary />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={8}>
              <S.Paper elevation={2}>
                <CartTitle />
                <CartList />
              </S.Paper>
            </Grid>
            <Grid item xs={4}>
              <S.Paper elevation={2}>
                <CartSummary />
              </S.Paper>
            </Grid>
          </>
        )}
      </Grid>
    </>
  )
}

export default CartPage
