import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'

import { useProductsContext } from 'context/ProductsContext'
import ImageLocal from 'components/ImageLocal'
import { useThemeContext } from 'context/ThemeContext'

import * as S from './styles'

import ProductColors from './ProductColors'
import SkuPrice from './SkuPrice'
import ProductName from './ProductName'
import AddToCartButton from './AddToCartButton'
import ProductSizes from './ProductSizes'

const SkuDetailPage = ({ pageContext: { skuId } }) => {
  const { products, skus } = useProductsContext()
  const { isMobile } = useThemeContext()

  // this sku does not contain the right size
  // the size is handle in the local state
  const skuSelected = skus[skuId]
  const productSelected = products[skuSelected.productId]

  const [sizeSelected, setSizeSelected] = useState(skuSelected.attributes.size)
  const skuIdSelectedWithSize = productSelected.skuIds[skuSelected.attributes.color][sizeSelected]

  return (
    <S.Main>
      <S.ProductImage isMobile={isMobile}>
        <ImageLocal localFiles={skuSelected.localFiles} alt={productSelected.name} />
      </S.ProductImage>
      <S.ProductDetails>
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
        {/* <DeliveryConditions /> */}
      </S.ProductDetails>
    </S.Main>
  )
}

SkuDetailPage.propTypes = {
  pageContext: PropTypes.shape({
    skuId: PropTypes.string.isRequired,
  }).isRequired,
}

export default SkuDetailPage
