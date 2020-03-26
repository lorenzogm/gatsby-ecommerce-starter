import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const FormSelect = ({ name, valueSelected, setValueSelected, options }) => {
  const handleChange = event => {
    setValueSelected(event.target.value)
  }

  return (
    <S.FormControl>
      <S.NativeSelect
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
      </S.NativeSelect>
    </S.FormControl>
  )
}

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  valueSelected: PropTypes.string.isRequired,
  setValueSelected: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default FormSelect
