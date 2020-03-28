/* global localStorage */

import getCartSkuQuantity from './getCartSkuQuantity'

const addToCart = ({ state, action }) => {
  if (!state.cartSkuList) {
    // eslint-disable-next-line no-console
    console.error('Undefined "cart" in state', state)
  }

  // eslint-disable-next-line no-case-declarations
  const index = state.cartSkuList.findIndex((item) => item.skuId === action.payload.skuId)
  // eslint-disable-next-line no-case-declarations
  const cartSkuList = [...state.cartSkuList]

  if (index === -1) {
    cartSkuList.push({ skuId: action.payload.skuId, price: action.payload.price, quantity: action.payload.quantity })
  } else {
    cartSkuList[index] = {
      skuId: action.payload.skuId,
      price: action.payload.price,
      quantity: parseInt(state.cartSkuList[index].quantity, 10) + parseInt(action.payload.quantity, 10),
    }
  }

  localStorage.setItem('cartSkuList', JSON.stringify(cartSkuList))

  return {
    ...state,
    cartSkuList,
    cartSkuQuantity: getCartSkuQuantity(cartSkuList),
  }
}

export default addToCart
