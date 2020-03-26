import React from 'react'
import PropTypes from 'prop-types'

import reducer from './reducer'
import initialState from './initialState'

const CartStateContext = React.createContext()
const CartDispatchContext = React.createContext()

function CartContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

function useState() {
  const context = React.useContext(CartStateContext)

  if (context === undefined) {
    throw new Error('useState must be used within a CartProvider')
  }

  return context
}

function useDispatch() {
  const context = React.useContext(CartDispatchContext)

  if (context === undefined) {
    throw new Error('useDispatch must be used within a CartProvider')
  }

  return context
}

function useCartContext() {
  return [useState(), useDispatch()]
}

export { useCartContext, CartContextProvider }
