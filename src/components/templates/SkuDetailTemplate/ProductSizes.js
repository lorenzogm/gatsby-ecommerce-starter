import PropTypes from 'prop-types'
import React from 'react'

import Select from 'components/foundations/Select/Select'
import sizes from 'constants/sizes'
import { useCartContext } from 'context/CartContext'

export default function ProductSizes({ productSelected, skuSelected, sizeSelected, setSizeSelected }) {
  const [, dispatch] = useCartContext()

  const options = Object.keys(productSelected.skuIds[skuSelected.attributes.color]).map((sizeId) => ({
    key: sizeId,
    value: sizeId,
    name: sizes[skuSelected.attributes.category][sizeId].name,
  }))

  const setValueSelected = (valueSelected) => {
    dispatch({ type: 'UPDATE_SKU_SIZE_SELECTED', payload: { skuSizeSelected: valueSelected } })
    setSizeSelected(valueSelected)
  }

  return <Select name="size" valueSelected={sizeSelected} setValueSelected={setValueSelected} options={options} />
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
