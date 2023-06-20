//TODO: control this component and move it into AvocadoCHeckbox component
import React from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";
import { useState, useContext } from "react";
import { AvocadoCheckboxProps } from "../AvocadoCheckbox/AvocadoCheckbox";


const AvocadoInputCheckbox = ({id, name, disabled}: AvocadoCheckboxProps) => {
    const theme = useContext(AvocadoThemeContext)
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

export default AvocadoInputCheckbox;