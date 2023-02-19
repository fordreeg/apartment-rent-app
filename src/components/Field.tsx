import React, {FC} from 'react'

interface FieldProps {
  label?: string
  id: string
}

const Field: FC<FieldProps> = ({label, id}) => {
  return (
    <div className="form-group">
      {label && <label className="form-label" htmlFor={id}>{label}</label>}
      <input className="form-input" type="text" id={id}/>
    </div>
  )
}

export default Field
