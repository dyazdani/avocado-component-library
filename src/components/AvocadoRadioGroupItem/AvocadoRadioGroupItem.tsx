import React from "react";
import AvocadoLabel from "../AvocadoLabel/AvocadoLabel";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoRadioGroupItemProps {
  id: string
  name: string
  label: string
  value: string
}

const AvocadoInputRadio = ({name, value}: AvocadoRadioGroupItemProps) => {
  const theme = useContext(AvocadoThemeContext)

  return (
          <input
          className={`avocado-input-radio ${theme}`}
            type="radio"
            name={name}
            value={value}
            data-testid="avocado-input-radio"
          />
        )
};

const AvocadoRadioGroupItem = ({id, name, label, value}: AvocadoRadioGroupItemProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
      <div data-testid={`avocado-radio-group-item-${id}`} className={`avocado-radio-group-item ${theme}`}>
        <AvocadoInputRadio
          name={name} 
          id={id}
          value={value}
          data-testid="avocado-input-radio"
        />
        <AvocadoLabel htmlFor={id} label={label}/>
      </div>
  )
};

export default AvocadoRadioGroupItem;