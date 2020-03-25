/* global localStorage */

const reducer = (state, action) => {
  if (!action.payload) {
    // eslint-disable-next-line no-console
    console.error(`Undefined "payload" in action ${action.type}`)
    return state
  }

  // eslint-disable-next-line no-console
  console.log('CartContext', { state, action })

  switch (action.type) {
    case 'ADD_TO_CART':
      if (!state.cart) {
        // eslint-disable-next-line no-console
        console.error('Undefined "cart" in state', state)
      }

      // eslint-disable-next-line no-case-declarations
      const index = state.cart.findIndex(item => item.skuId === action.payload.skuId)
      // eslint-disable-next-line no-case-declarations
      const cart = [...state.cart]

      if (index === -1) {
        cart.push({ skuId: action.payload.skuId, quantity: action.payload.quantity })
      } else {
        cart[index] = { skuId: action.payload.skuId, quantity: state.cart[index].quantity + action.payload.quantity }
      }

      localStorage.setItem('cart', JSON.stringify(cart))

      return {
        ...state,
        cart,
      }

    default:
      return state
  }
}

export default reducer
