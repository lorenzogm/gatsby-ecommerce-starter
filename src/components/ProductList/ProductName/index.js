import PropTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'

const ProductName = ({ product }) => {
  const { t } = useTranslation()

  return (
    <Typography variant="caption" component="h3">
      {t(product.name)}
    </Typography>
  )
}

ProductName.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProductName
