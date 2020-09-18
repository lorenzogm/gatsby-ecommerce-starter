import React from 'react'
import List from '@material-ui/core/List'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import Button from 'components/foundations/Button/Button'
import Select from 'components/foundations/Select/Select'
import ImageLocal from 'components/foundations/ImageLocal/ImageLocal'
import colors from 'constants/colors'
import sizes from 'constants/sizes'

import { ListItem, ListItemAvatar, ListItemText } from './CartList.styles'

export default function CartList({ skus, cartSkuList, dispatch, isMobile }) {
  const { t } = useTranslation()

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
          <Select
            name="quantity"
            valueSelected={item.quantity}
            setValueSelected={(value) =>
              dispatch({ type: 'SET_SKU_QUANTITY', payload: { skuId: sku.id, quantity: value } })
            }
            options={options}
          />
        )

        return (
          <ListItem key={item.skuId}>
            <ListItemAvatar>
              <ImageLocal localFiles={sku.localFiles} alt={name || sku.id} />
            </ListItemAvatar>

            <div>
              <ListItemText
                primary={sku.attributes.name}
                secondary={`${t('Color')}: ${colors[color].name} - ${t('Size')}: ${sizes[category][size].name}`}
              />

              {isMobile && formSelectQuantity}

              <Button variant="buttonless" startIcon={<DeleteIcon fontSize="small" />} onClick={onClick}>
                <Typography variant="caption">{t('Remove')}</Typography>
              </Button>
            </div>

            {!isMobile && <ListItemSecondaryAction>{formSelectQuantity}</ListItemSecondaryAction>}
          </ListItem>
        )
      })}
    </List>
  )
}
