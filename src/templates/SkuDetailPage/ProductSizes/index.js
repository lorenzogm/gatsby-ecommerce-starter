import React from 'react'
import PropTypes from 'prop-types'

import sizes from 'constants/sizes'

import * as S from './styles'

const ProductSizes = ({ productSelected, skuSelected, sizeSelected, setSizeSelected }) => {
  const sizesIds = Object.keys(productSelected.skuIds[skuSelected.attributes.color])

  const handleChange = event => {
    setSizeSelected(event.target.value)
  }

  return (
    <S.FormControl>
      <S.NativeSelect
        disableUnderline
        value={sizeSelected}
        onChange={handleChange}
        inputProps={{
          name: 'size',
          id: 'size',
        }}
      >
        {sizesIds.map(sizeId => (
          <option key={sizeId} value={sizeId}>
            {sizes[skuSelected.attributes.category][sizeId].name}
          </option>
        ))}
      </S.NativeSelect>
    </S.FormControl>
  )
}

ProductSizes.propTypes = {
  productSelected: PropTypes.shape({
    name: PropTypes.string.isRequired,
    metadata: PropTypes.shape({ defaultSize: PropTypes.string.isRequired }).isRequired,
    skuIds: PropTypes.shape({}).isRequired,
  }).isRequired,
  skuSelected: PropTypes.shape({
    attributes: PropTypes.shape({
      category: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  sizeSelected: PropTypes.string.isRequired,
  setSizeSelected: PropTypes.func.isRequired,
}

export default ProductSizes
