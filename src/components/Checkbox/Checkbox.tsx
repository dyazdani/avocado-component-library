import React from "react";
import { ThemeContext } from "../Contexts";
import { useState } from "react";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import Label from "../Label/Label";

export interface CheckboxProps {
  label: string
  id: string
  name: string
  disabled: boolean
}

const Checkbox = ({label, id, name, disabled}: CheckboxProps) => {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <div className="avocado-checkbox" data-testid="avocado-checkbox">
        <InputCheckbox
          name={name} 
          id={id}
          disabled={disabled}
        />
        <Label id={id} label={label}/>
      </div>
    </ThemeContext.Provider>
  )
};

export default Checkbox;