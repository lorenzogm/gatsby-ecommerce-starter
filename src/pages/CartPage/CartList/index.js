import React from 'react'
import List from '@material-ui/core/List'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'

import { useCartContext } from 'context/CartContext'
import { useProductsContext } from 'context/ProductsContext'
import Button from 'components/Button'
import FormSelect from 'components/FormSelect'
import ImageLocal from 'components/ImageLocal'
import colors from 'constants/colors'
import sizes from 'constants/sizes'

import * as S from './styles'

const CartList = () => {
  const { skus } = useProductsContext()
  const [{ cartSkuList }, dispatch] = useCartContext()

  const options = Array.from({ length: 10 }, (v, i) => ({ key: i + 1, value: i + 1, name: i + 1 }))

  return (
    <List>
      {cartSkuList.map((item) => {
        const sku = skus[item.skuId]

        if (!sku || !sku.attributes) {
          return null
        }

        const { name, color, size, category } = sku.attributes
        const onClick = () => {
          dispatch({ type: 'REMOVE_FROM_CART', payload: { skuId: sku.id } })
        }

        return (
          <S.ListItem key={item.skuId}>
            <S.ListItemAvatar>
              <ImageLocal localFiles={sku.localFiles} alt={name} />
            </S.ListItemAvatar>

            <div>
              <S.ListItemText
                primary={sku.attributes.name}
                secondary={`Color: ${colors[color].name} - Size: ${sizes[category][size].name}`}
              />

              <Button variant="buttonless" startIcon={<DeleteIcon fontSize="small" />} onClick={onClick}>
                <Typography variant="caption">Remove</Typography>
              </Button>
            </div>

            <ListItemSecondaryAction>
              <FormSelect
                name="quantity"
                valueSelected={item.quantity}
                setValueSelected={(value) =>
                  dispatch({ type: 'SET_SKU_QUANTITY', payload: { skuId: sku.id, quantity: value } })
                }
                options={options}
              />
            </ListItemSecondaryAction>
          </S.ListItem>
        )
      })}
    </List>
  )
}

export default CartList
