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
        <div className="avocado-checkbox" data-testid="avocado-checkbox">
        <input
          type="checkbox" 
          name={name} 
          id={id} 
          tabIndex={0} 
          defaultChecked={checked}
          disabled={disabled}
        />
        <label htmlFor={id}>{label}</label>
        </div>
  )
};

export default Checkbox;