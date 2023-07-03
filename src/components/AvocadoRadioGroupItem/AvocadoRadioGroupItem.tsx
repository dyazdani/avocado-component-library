import React, { ChangeEvent } from "react";
import AvocadoLabel from "../AvocadoLabel/AvocadoLabel";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoRadioGroupItemProps {
  id?: string
  name?: string
  label?: string
  value?: string
  checked?: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void

}

const AvocadoInputRadio = ({name, value, checked, id, disabled, required}: AvocadoRadioGroupItemProps) => {
  const theme = useContext(AvocadoThemeContext)

  return (
          <input
          className={`avocado-input-radio ${theme}`}
            type="radio"
            name={name}
            id={id}
            value={value}
            checked={checked}
            disabled={disabled}
            required={required}
            data-testid="avocado-input-radio"
          />
        )
};

const AvocadoRadioGroupItem = ({id, name, label, value, checked}: AvocadoRadioGroupItemProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
      <div data-testid={`avocado-radio-group-item-${id}`} className={`avocado-radio-group-item ${theme}`}>
        <AvocadoInputRadio
        name={name}
        id={id}
        value={value}
        checked={checked}
        data-testid="avocado-input-radio"
        />
        <AvocadoLabel htmlFor={id} label={label}/>
      </div>
  )
};

export default AvocadoRadioGroupItem;