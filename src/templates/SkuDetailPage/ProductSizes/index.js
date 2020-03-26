import React from 'react'
import PropTypes from 'prop-types'

import sizes from 'constants/sizes'
import FormSelect from 'components/FormSelect'

const ProductSizes = ({ productSelected, skuSelected, sizeSelected, setSizeSelected }) => {
  const options = Object.keys(productSelected.skuIds[skuSelected.attributes.color]).map(sizeId => ({
    key: sizeId,
    value: sizeId,
    name: sizes[skuSelected.attributes.category][sizeId].name,
  }))

  return <FormSelect name="size" valueSelected={sizeSelected} setValueSelected={setSizeSelected} options={options} />
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
