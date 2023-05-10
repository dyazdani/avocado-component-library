import React from "react";
import { ThemeContext } from "../Contexts";
import { useState } from "react";

export interface CheckboxProps {
  label: string
  id: string
  checked: boolean
  disabled: boolean
  name: string
}

const Checkbox = ({label, id, name, checked, disabled}: CheckboxProps) => {
    const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <div className="avocado-checkbox" data-testid="avocado-checkbox">
      <input
        className={theme}
        type="checkbox" 
        name={name} 
        id={id} 
        tabIndex={0} 
        defaultChecked={checked}
        disabled={disabled}
      />
      <label htmlFor={id} className={theme}>{label}</label>
      </div>
    </ThemeContext.Provider>
  )
};

export default Checkbox;