import React from 'react'
import { useTranslation } from 'react-i18next'

const Delivery = () => {
  const { t } = useTranslation()

  return (
    <>
      <p>{t(`This product is pre-order. It will be dispatched 40 days after the campaing is closed`)}</p>
      <p>{t(`Delivery 9.90€. Free shipping with a minimum order of 100€`)}</p>
    </>
  )
}

export default Delivery
