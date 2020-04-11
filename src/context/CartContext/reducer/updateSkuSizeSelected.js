const updateSkuSizeSelected = ({ state, action }) => {
  if (!action.payload || !action.payload.skuSizeSelected) {
    // eslint-disable-next-line no-console
    console.error('Undefined "skuSizeSelected" in action', action)
  }

  return {
    ...state,
    skuSizeSelected: action.payload.skuSizeSelected,
  }
}

export default updateSkuSizeSelected
