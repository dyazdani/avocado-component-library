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
    <div className={`avocado-checkbox`}>
        <input 
        type="checkbox" 
        name={name} 
        id={id} 
        tabIndex={0} 
        checked={checked}
        disabled={disabled}
        />
        <label htmlFor={id}>{label}</label>;
     </div>
  )
};

export default Checkbox;