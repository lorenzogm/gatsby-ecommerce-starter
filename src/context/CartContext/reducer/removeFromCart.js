/* global localStorage */

import getCartSkuQuantity from './getCartSkuQuantity'

const removeFromCart = ({ state, action }) => {
  if (!state.cartSkuList) {
    // eslint-disable-next-line no-console
    console.error('Undefined "cart" in state', state)
  }

  const cartSkuList = state.cartSkuList.filter((item) => item.skuId !== action.payload.skuId)

  localStorage.setItem('cartSkuList', JSON.stringify(cartSkuList))

  return {
    ...state,
    cartSkuList,
    cartSkuQuantity: getCartSkuQuantity(cartSkuList),
  }
}

export default removeFromCart
