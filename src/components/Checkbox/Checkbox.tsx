import React from "react";
import { ThemeContext } from "../Contexts";
import { useState } from "react";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import Label from "../Label/Label";

export interface CheckboxProps {
  label: string
  id: string
  disabled: boolean
  name: string
}

const Checkbox = ({label, id, name, disabled}: CheckboxProps) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <div className="avocado-checkbox" data-testid="avocado-checkbox">
        <InputCheckbox
          name={name} 
          id={id}
          disabled={disabled}
        />
      <Label htmlFor={id} className={theme}>{label}</Label>
      </div>
    </ThemeContext.Provider>
  )
};

export default Checkbox;