import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'

export default function Delivery() {
  const { t } = useTranslation()

  return (
    <>
      <p>{t(`This product is pre-order. It will be dispatched 40 days after the campaing is closed`)}</p>
      <p>{t(`Delivery 9.90€. Free shipping with a minimum order of 100€`)}</p>
    </>
  )
}
