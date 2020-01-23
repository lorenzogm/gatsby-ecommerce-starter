import React, { useContext } from 'react'
import { ProductsContext } from './ProductsProvider'
import ProductListItem from './ProductListItem'

const ProductList = () => {
  const { listProducts } = useContext(ProductsContext)
  const products = listProducts()
  return (
    <div style={{ columnCount: 3 }}>
      {products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
