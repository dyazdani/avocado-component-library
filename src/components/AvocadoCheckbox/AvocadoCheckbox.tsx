import React, {ChangeEvent} from "react";
import AvocadoLabel from "../AvocadoLabel/AvocadoLabel";
import { AvocadoThemeContext } from "../AvocadoThemeContext";
import { useContext } from "react";

export interface AvocadoCheckboxProps {
  label?: string
  id?: string
  name?: string
  disabled?: boolean
  checked?: boolean
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const AvocadoInputCheckbox = ({id, name, disabled, checked, value, onChange}: AvocadoCheckboxProps) => {
  const theme = useContext(AvocadoThemeContext)

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
          onChange={onChange}
          disabled={disabled}
          value={value}
          data-testid="avocado-input"
        />
      )
};

const AvocadoCheckbox = ({label, id, name, disabled, checked, value, onChange}: AvocadoCheckboxProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
      <div className={`avocado-checkbox ${theme}`} data-testid="avocado-checkbox">
        <AvocadoInputCheckbox
          name={name} 
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          value={value}
        />
        <AvocadoLabel id={id} label={label}/>
      </div>
  )
};

export default AvocadoCheckbox;