import React from "react";
import AvocadoInputRadio from "../AvocadoInputRadio/InputRadio";
import AvocadoLabel from "../AvocadoLabel/AvocadoLabel";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoRadioGroupItemProps {
  id: string
  name: string
  label: string
  value: string
}

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
        <AvocadoLabel id={id} label={label}/>
      </div>
  )
};

export default AvocadoRadioGroupItem;