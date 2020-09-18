import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'

import { useCartContext } from 'context/CartContext'
import { useProductsContext } from 'context/ProductsContext'
import ImageLocal from 'components/foundations/ImageLocal/ImageLocal'
import { useThemeContext } from 'context/ThemeContext'

import { PageContent, ProductImage, ProductDetails } from './SkuDetailTemplate.styles'

import ProductColors from './ProductColors'
import SkuPrice from './SkuPrice'
import ProductName from './ProductName'
import AddToCartButton from './AddToCartButton'
import ProductSizes from './ProductSizes'
import Description from './Description'
import Delivery from './Delivery'

export default function SkuDetailPage({ pageContext: { skuId } }) {
  const [{ skuSizeSelected }] = useCartContext()
  const { products, skus } = useProductsContext()
  const { isMobile } = useThemeContext()

  // this sku does not contain the right size
  // the size is handle in the local state
  const skuSelected = skus[skuId]
  const productSelected = products[skuSelected.productId]

  const [sizeSelected, setSizeSelected] = useState(skuSizeSelected || productSelected.metadata.defaultSize)
  const skuIdSelectedWithSize = productSelected.skuIds[skuSelected.attributes.color][sizeSelected]

  return (
    <PageContent>
      <ProductImage $isMobile={isMobile}>
        <ImageLocal localFiles={skuSelected.localFiles} alt={productSelected.name} />
      </ProductImage>
      <ProductDetails>
        <ProductName productSelected={productSelected} />
        <Divider />
        <SkuPrice skuSelected={skuSelected} />
        <ProductColors productSelected={productSelected} skus={skus} skuSelected={skuSelected} />
        <ProductSizes
          productSelected={productSelected}
          skuSelected={skuSelected}
          sizeSelected={sizeSelected}
          setSizeSelected={setSizeSelected}
        />
        <AddToCartButton skuIdSelectedWithSize={skuIdSelectedWithSize} />
        <Delivery />
        <hr />
        <Description />
      </ProductDetails>
    </PageContent>
  )
}

SkuDetailPage.propTypes = {
  pageContext: PropTypes.shape({
    skuId: PropTypes.string.isRequired,
  }).isRequired,
}
