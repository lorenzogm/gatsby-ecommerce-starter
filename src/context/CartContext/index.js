/* global localStorage */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useProductsContext } from 'context/ProductsContext'

const CartContext = React.createContext()

const CartContextProvider = ({ children }) => {
  const { skus } = useProductsContext()
  const [mode, setMode] = useState(false)

  // Load cart from local storage. Initialize if not present or incorrect
  const [contents, setContents] = useState(() => {
    let localCart
    try {
      localCart = JSON.parse(localStorage.getItem('cart'))
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.message)
    }
    if (!localCart || !Array.isArray(localCart)) return []
    return localCart
  })

  // Save cart to local storage after load and on update
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(contents))
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }, [contents])

  // An array representing the cart in the form of [{sku}, quantity]
  const cart = contents.map(([id, quantity]) => [skus[id], quantity])

  // The number of items in the cart
  // eslint-disable-next-line no-unused-vars
  const count = contents.reduce((sum, [_, quantity]) => sum + quantity, 0)

  // The total cost of the items in the cart
  const total = contents.reduce((sum, [id, quantity]) => (skus[id] ? sum + skus[id].price * quantity : sum), 0)

  // Returns true if `quantity` of item with `id` is available for purchase
  function available(id, quantity = 1) {
    const sku = skus[id]
    if (!sku) {
      // eslint-disable-next-line no-console
      console.error(`Sku with id ${id} not found`)
      return false
    }
    if (!sku.active) {
      return false
    }
    if (sku.inventory.type === 'infinite') {
      return true
    }
    if (sku.inventory.type === 'bucket') {
      return ['in_stock', 'limited'].includes(sku.inventory.type)
    }
    if (sku.inventory.type === 'finite') {
      return sku.inventory.quantity >= quantity
    }
    return false
  }

  // Sets quantity of item with `id`
  function set(id, quantity) {
    if (!available(id)) return

    const index = contents.findIndex(item => item[0] === id)
    setContents(state => {
      const newState = [...state]
      if (index !== -1) {
        newState[index] = [id, quantity]
      } else {
        newState.push([id, quantity])
      }
      return newState
    })
  }

  // Increments item with `id` by `quantity`, which defaults to 0
  function add(id, quantity = 1) {
    const currentItem = contents.find(item => item[0] === id)
    const currentQuantity = currentItem ? currentItem[1] : 0
    set(id, quantity + currentQuantity)
  }

  // Removes item with `id`
  function remove(id) {
    setContents(state => state.filter(item => item[0] !== id))
  }

  // Toggles cart display, or sets to the boolean `force` if provided
  function toggle(force) {
    setMode(prev => force || !prev)
  }

  const ctx = {
    contents,
    cart,
    add,
    set,
    remove,
    available,
    toggle,
    count,
    total,
    mode,
  }

  return <CartContext.Provider value={{ ...ctx }}>{children}</CartContext.Provider>
}

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

function useCartContext() {
  const context = React.useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartContextProvider')
  }

  return context
}

export { useCartContext, CartContextProvider }
