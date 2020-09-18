import React from 'react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import SEO from 'components/elements/SEO/SEO'
import { useCartContext } from 'context/CartContext'
import { useThemeContext } from 'context/ThemeContext'
import { useProductsContext } from 'context/ProductsContext'

import CartTitle from './CartTitle'
import CartList from './CartList'
import CartSummary from './CartSummary'
import CartEmpty from './CartEmpty'
import CheckoutButton from './CheckoutButton'
import { Paper } from './CartTemplate.styles'

export default function CartTemplate() {
  const { isMobile } = useThemeContext()
  const { skus } = useProductsContext()
  const [{ cartSkuList, cartSkuQuantity }, dispatch] = useCartContext()

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
              <CartTitle cartSkuQuantity={cartSkuQuantity} />
              <CartList skus={skus} cartSkuList={cartSkuList} dispatch={dispatch} isMobile={isMobile} />
            </Grid>
            <Divider />
            <Grid item xs={12}>
              <CartSummary skus={skus} cartSkuList={cartSkuList} />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={8}>
              <Paper elevation={2}>
                <CartTitle cartSkuQuantity={cartSkuQuantity} />
                <CartList skus={skus} cartSkuList={cartSkuList} dispatch={dispatch} isMobile={isMobile} />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={2}>
                <CartSummary skus={skus} cartSkuList={cartSkuList} />
                <CheckoutButton cartSkuList={cartSkuList} />
              </Paper>
            </Grid>
          </>
        )}
      </Grid>
    </>
  )
}
