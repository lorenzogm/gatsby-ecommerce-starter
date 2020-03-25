import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'

import { useCartContext } from 'context/CartContext'
import { useProductsContext } from 'context/ProductsContext'
import ImageLocal from 'components/ImageLocal'

const CartList = () => {
  const { skus } = useProductsContext()
  const { state } = useCartContext()

  return (
    <List>
      {state.cart.map(item => {
        const sku = skus[item.skuId]

        if (!sku || !sku.attributes || !sku.attributes.name) {
          return null
        }

        return (
          <ListItem key={item.skuId}>
            <ListItemAvatar>
              <ImageLocal localFiles={sku.localFiles} alt={sku.attributes.name} />
            </ListItemAvatar>
            <ListItemText primary={sku.attributes.name} secondary={`Quantity: ${item.quantity}`} />
          </ListItem>
        )
      })}
    </List>
  )
}

export default CartList
