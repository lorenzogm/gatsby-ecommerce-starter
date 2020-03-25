/* global localStorage */

const getCartFromLocalStorage = () => {
  try {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (Array.isArray(cart)) {
      return cart
    }

    return []
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message)
    return []
  }
}

const initialState = { cart: getCartFromLocalStorage() }

export default initialState
