import React from "react";
import AvocadoInputCheckbox from "../AvocadoInputCheckbox/AvocadoInputCheckbox";
import AvocadoLabel from "../AvocadoLabel/AvocadoLabel";
import { AvocadoThemeContext } from "../AvocadoThemeContext";
import { useContext } from "react";

export interface AvocadoCheckboxProps {
  label: string
  id: string
  name: string
  disabled: boolean
}

const AvocadoCheckbox = ({label, id, name, disabled}: AvocadoCheckboxProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
      <div className={`avocado-checkbox ${theme}`} data-testid="avocado-checkbox">
        <AvocadoInputCheckbox
          name={name} 
          id={id}
          disabled={disabled}
        />
        <AvocadoLabel id={id} label={label}/>
      </div>
  )
};

export default AvocadoCheckbox;