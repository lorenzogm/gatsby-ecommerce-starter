import React from 'react'
import List from '@material-ui/core/List'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import { useTranslation } from 'react-i18next'

import { useCartContext } from 'context/CartContext'
import { useProductsContext } from 'context/ProductsContext'
import { useThemeContext } from 'context/ThemeContext'
import Button from 'components/Button'
import FormSelect from 'components/FormSelect'
import ImageLocal from 'components/ImageLocal'
import colors from 'constants/colors'
import sizes from 'constants/sizes'

import * as S from './styles'

const CartList = () => {
  const { t } = useTranslation()
  const { skus } = useProductsContext()
  const [{ cartSkuList }, dispatch] = useCartContext()
  const { isMobile } = useThemeContext()

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

        const formSelectQuantity = (
          <FormSelect
            name="quantity"
            valueSelected={item.quantity}
            setValueSelected={(value) =>
              dispatch({ type: 'SET_SKU_QUANTITY', payload: { skuId: sku.id, quantity: value } })
            }
            options={options}
          />
        )

        return (
          <S.ListItem key={item.skuId}>
            <S.ListItemAvatar>
              <ImageLocal localFiles={sku.localFiles} alt={name || sku.id} />
            </S.ListItemAvatar>

            <div>
              <S.ListItemText
                primary={sku.attributes.name}
                secondary={`${t('Color')}: ${colors[color].name} - ${t('Size')}: ${sizes[category][size].name}`}
              />

              {isMobile && formSelectQuantity}

              <Button variant="buttonless" startIcon={<DeleteIcon fontSize="small" />} onClick={onClick}>
                <Typography variant="caption">{t('Remove')}</Typography>
              </Button>
            </div>

            {!isMobile && <ListItemSecondaryAction>{formSelectQuantity}</ListItemSecondaryAction>}
          </S.ListItem>
        )
      })}
    </List>
  )
}

export default CartList
