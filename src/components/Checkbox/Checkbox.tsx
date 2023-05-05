import React from "react";

export interface CheckboxProps {
  label: string;
  id: string;
  state: string;
  name: string;
  value: string;
}

const Checkbox = ({label, id, state, name, value}: CheckboxProps) => {
  return (
    <div className={`checkbox ${state}`}>
        <input 
        type="checkbox" 
        name={name} 
        value={value} 
        id={id} 
        tabIndex={0} 
        checked={state === 'CHECKED' || state === 'CHECKED_DISABLED'}
        disabled={state === 'CHECKED_DISABLED' || state === 'UNCHECKED_DISABLED'}
        />
        <label htmlFor={id}>{label}</label>;
     </div>
  )
};

export default Checkbox;