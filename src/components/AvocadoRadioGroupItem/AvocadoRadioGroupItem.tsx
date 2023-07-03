import React, { ChangeEvent } from "react";
import AvocadoInputRadio from "../AvocadoInputRadio/InputRadio";
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

const AvocadoRadioGroupItem = ({id, name, label, value, disabled, checked, onChange}: AvocadoRadioGroupItemProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
      <div data-testid={`avocado-radio-group-item-${id}`} className={`avocado-radio-group-item ${theme}`}>
        <AvocadoInputRadio
          name={name} 
          id={id}
          value={value}
          data-testid="avocado-input-radio"
          onChange={onChange}
          disabled={disabled}
          checked={checked}
        />
        <AvocadoLabel id={id} label={label}/>
      </div>
  )
};

export default AvocadoRadioGroupItem;