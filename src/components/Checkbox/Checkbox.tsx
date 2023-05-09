import React from "react";

export interface CheckboxProps {
  label: string
  id: string
  checked: boolean
  disabled: boolean
  name: string
}

const Checkbox = ({label, id, name, checked, disabled}: CheckboxProps) => {
  return (
        <label className="avocado-checkbox" htmlFor={id}>{label}
          <input 
          type="checkbox" 
          name={name} 
          id={id} 
          tabIndex={0} 
          checked={checked}
          disabled={disabled}
          />
          <span></span>
        </label>
  )
};

export default Checkbox;