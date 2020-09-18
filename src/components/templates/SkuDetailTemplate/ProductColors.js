import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import colors from 'constants/colors'
import ImageLocal from 'components/foundations/ImageLocal/ImageLocal'
import { useThemeContext } from 'context/ThemeContext'
import Link from 'components/foundations/Link/Link'

import { Row, Column } from './ProductColors.styles'

export default function ProductColor({ productSelected, skus, skuSelected }) {
  const { t } = useTranslation()
  const colorIds = Object.keys(productSelected.skuIds)
  const { isMobile } = useThemeContext()

  if (colorIds.length === 1) {
    return null
  }

  return (
    <>
      <Typography component="h4" variant="caption" color="secondary" gutterBottom>
        {`${t('Color')}: ${colors[skuSelected.attributes.color].name}`}
      </Typography>
      <Row>
        {colorIds.map((colorId) => {
          const skuId = productSelected.skuIds[colorId][productSelected.metadata.defaultSize]
          const sku = skus[skuId]

          return (
            <Column key={colorId} selected={skuSelected.fields.slug === sku.fields.slug} $isMobile={isMobile}>
              <Link to={`/${skus[sku.id].fields.slug}`}>
                <ImageLocal localFiles={sku.localFiles} alt={sku.fields.slug} />
              </Link>
            </Column>
          )
        })}
      </Row>
    </>
  )
}

ProductColor.propTypes = {
  productSelected: PropTypes.shape({
    name: PropTypes.string.isRequired,
    metadata: PropTypes.shape({ defaultSize: PropTypes.string.isRequired }).isRequired,
    skuIds: PropTypes.shape({}).isRequired,
  }).isRequired,
  skus: PropTypes.shape({}).isRequired,
  skuSelected: PropTypes.shape({
    id: PropTypes.string.isRequired,
    attributes: PropTypes.shape({ color: PropTypes.string.isRequired }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}
