const getCartSubtotal = ({ skus, cartSkuList }) =>
  cartSkuList.reduce((acc, item) => acc + item.quantity * skus[item.skuId].price, 0)

export default getCartSubtotal
