/* global localStorage */

import getCartSkuQuantity from './reducer/getCartSkuQuantity'

const getCartFromLocalStorage = () => {
  try {
    const cartSkuList = JSON.parse(localStorage.getItem('cartSkuList'))
    if (Array.isArray(cartSkuList)) {
      return {
        cartSkuList,
        cartSkuQuantity: getCartSkuQuantity(cartSkuList),
      }
    }

    return { cartSkuList: [], cartSkuQuantity: 0 }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message)
    return []
  }
}

const initialState = { ...getCartFromLocalStorage() }

export default initialState
