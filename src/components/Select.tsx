import React, {FC} from 'react'
import {DropdownOptions} from "../types/interfaces";

interface SelectProps {
  selectLabel: string
  options: DropdownOptions[]
  value?: DropdownOptions
}

const Select: FC<SelectProps> = ({selectLabel, options, value}) => {

  return (
    <div className="form-group">
      <label className="form-label" htmlFor="room">{selectLabel}</label>
      <select id='room' className="form-select">
        {options.map(({value, label}) => (<option key={label} value={value}>{label}</option>))}
      </select>
    </div>
  )
}

export default Select
