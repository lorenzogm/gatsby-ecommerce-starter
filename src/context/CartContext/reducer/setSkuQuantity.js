/* global localStorage */

import getCartSkuQuantity from './getCartSkuQuantity'

const setSkuQuantity = ({ state, action }) => {
  if (!state.cartSkuList) {
    // eslint-disable-next-line no-console
    console.error('Undefined "cart" in state', state)
  }

  // eslint-disable-next-line no-case-declarations
  const index = state.cartSkuList.findIndex((item) => item.skuId === action.payload.skuId)

  if (index === -1) {
    return state
  }

  // eslint-disable-next-line no-case-declarations
  const cartSkuList = [...state.cartSkuList]

  cartSkuList[index] = {
    skuId: cartSkuList[index].skuId,
    price: cartSkuList[index].price,
    quantity: parseInt(action.payload.quantity, 10),
  }

  localStorage.setItem('cartSkuList', JSON.stringify(cartSkuList))

  return {
    ...state,
    cartSkuList,
    cartSkuQuantity: getCartSkuQuantity(cartSkuList),
  }
}

export default setSkuQuantity
