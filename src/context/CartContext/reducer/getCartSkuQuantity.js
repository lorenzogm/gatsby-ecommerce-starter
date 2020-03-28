const getCartSkuQuantity = (cartSkuList) => cartSkuList.reduce((acc, item) => acc + item.quantity, 0)

export default getCartSkuQuantity
