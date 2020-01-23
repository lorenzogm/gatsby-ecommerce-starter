import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const ProductListItem = ({ product }) => {
  const price = product.skus.reduce(
    (minPrice, sku) => (sku.price < minPrice ? sku.price : minPrice),
    product.skus[0].price,
  )

  return (
    <div key={product.id} style={{ breakInside: 'avoid' }}>
      <Link to={`/${product.slug}`} style={{ textDecoration: 'none' }}>
        <div
          style={{
            maxWidth: 250,
            flex: '1 1 auto',
            margin: '0 2rem 3rem',
          }}
        >
          {product.localFiles && <Img fluid={product.localFiles[0].childImageSharp.fluid} alt={product.name} />}
          <div
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: '0.5rem',
            }}
          >
            {product.name}
          </div>
          <div style={{ textAlign: 'center' }}>${price / 100}</div>
        </div>
      </Link>
    </div>
  )
}

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductListItem
