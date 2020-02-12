/* global fetch */

import { useState, useEffect } from 'react'

import processGatsbyData from './processGatsbyData'
import processStripeData from './processStripeData'

const useFetchProducts = ({ allStripeSku }) => {
  /** Load product data from Gatsby store */
  const [initialProducts, initialSkus] = processGatsbyData(allStripeSku)
  const [products, setProducts] = useState(initialProducts)
  const [skus, setSkus] = useState(initialSkus)

  /** Query live data from Stripe and update products */
  const updateProducts = async () => {
    const { data, error } = await fetch('/.netlify/functions/skuList')
      .then(response => response.json())
      .catch(errorFetch => console.error(errorFetch))

    if (error) {
      console.error(error)
    }

    const [liveProducts, liveSkus] = processStripeData(data, products)

    setProducts(liveProducts)
    setSkus(liveSkus)
  }

  /** On render and update, update products with live data */
  useEffect(() => {
    updateProducts()
  }, [])

  return {
    products,
    skus,
    listProducts: sort => {
      const fn = sort || ((a, b) => b.created - a.created)
      return Object.values(products).sort(fn)
    },
    listSkus: sort => {
      const fn = sort || ((a, b) => b.created - a.created)
      return Object.values(skus).sort(fn)
    },
  }
}

export default useFetchProducts
