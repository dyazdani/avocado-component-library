import React from "react";
import { ThemeContext } from "../Contexts";
import { useState } from "react";

export interface CheckboxProps {
  label: string
  id: string
  disabled: boolean
  name: string
}

const Checkbox = ({label, id, name, disabled}: CheckboxProps) => {
    const [theme, setTheme] = useState('light');
    const [checked, setChecked] = useState<boolean>(false);
  return (
    <ThemeContext.Provider value={theme}>
      <div className="avocado-checkbox" data-testid="avocado-checkbox">
      <input
        className={theme}
        type="checkbox" 
        name={name} 
        id={id} 
        tabIndex={0} 
        //TODO: Figure out how to make checked attribute appear in html
        // and work both in testing and in Storybook
        checked={checked}
        onChange={() => setChecked(!checked)}
        disabled={disabled}
      />
      <label htmlFor={id} className={theme}>{label}</label>
      </div>
    </ThemeContext.Provider>
  )
};

export default Checkbox;