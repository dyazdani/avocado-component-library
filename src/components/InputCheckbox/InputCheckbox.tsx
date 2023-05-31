import React from "react";
import { ThemeContext } from "../ThemeContext";
import { useState, useContext } from "react";
import { CheckboxProps } from "../Checkbox/Checkbox";


const InputCheckbox = ({id, name, disabled}: CheckboxProps) => {
    const theme = useContext(ThemeContext)
    const [checked, setChecked] = useState<boolean>(false);
  
  return (
          <input
            className={`avocado-input-checkbox ${theme}`}
            type="checkbox" 
            name={name} 
            id={id} 
            tabIndex={0} 
            //TODO: Figure out how to make checked attribute appear in html
            // and work both in testing and in Storybook
            checked={checked}
            onChange={() => setChecked(!checked)}
            disabled={disabled}
            data-testid="avocado-input"
          />
        )
};

export default InputCheckbox;