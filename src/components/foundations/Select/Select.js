import React from 'react'
import PropTypes from 'prop-types'

import { FormControl, NativeSelect } from './Select.styles'

export default function Select({ name, valueSelected, setValueSelected, options }) {
  const handleChange = (event) => {
    setValueSelected(event.target.value)
  }

  return (
    <FormControl>
      <NativeSelect
        disableUnderline
        value={valueSelected}
        onChange={handleChange}
        inputProps={{
          name,
          id: name,
        }}
      >
        {options.map(({ key, value, name: optionName }) => (
          <option key={key} value={value}>
            {optionName}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  valueSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setValueSelected: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
  ).isRequired,
}
