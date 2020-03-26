import addToCart from './addToCart'
import setSkuQuantity from './setSkuQuantity'

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
      return addToCart({ state, action })

    case 'SET_SKU_QUANTITY':
      return setSkuQuantity({ state, action })

    default:
      return state
  }
}

export default reducer
