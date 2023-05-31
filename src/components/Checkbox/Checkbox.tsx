import React from "react";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import Label from "../Label/Label";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

export interface CheckboxProps {
  label: string
  id: string
  name: string
  disabled: boolean
}

const Checkbox = ({label, id, name, disabled}: CheckboxProps) => {
  const theme = useContext(ThemeContext)
  return (
      <div className={`avocado-checkbox ${theme}`} data-testid="avocado-checkbox">
        <InputCheckbox
          name={name} 
          id={id}
          disabled={disabled}
        />
        <Label id={id} label={label}/>
      </div>
  )
};

export default Checkbox;