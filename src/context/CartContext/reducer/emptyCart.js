/* global localStorage */

const emptyCart = ({ state }) => {
  if (!state.cartSkuList) {
    // eslint-disable-next-line no-console
    console.error('Undefined "cart" in state', state)
  }

  const cartSkuList = []

  localStorage.setItem('cartSkuList', JSON.stringify(cartSkuList))

  return {
    ...state,
    cartSkuList,
    cartSkuQuantity: 0,
  }
}

export default emptyCart
