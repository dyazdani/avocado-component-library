import React from "react";
import AvocadoInputRadio from "../AvocadoInputRadio/InputRadio";
import AvocadoLabel from "../AvocadoLabel/AvocadoLabel";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoRadioDivProps {
  id: string
  name: string
  label: string
  value: string
}

const AvocadoRadioDiv = ({id, name, label, value}: AvocadoRadioDivProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
      <div data-testid={`avocado-radio-div-${id}`} className={`avocado-radio-div ${theme}`}>
        <AvocadoInputRadio
          name={name} 
          id={id}
          value={value}
          data-testid="avocado-radio-div"
        />
        <AvocadoLabel id={id} label={label}/>
      </div>
  )
};

export default AvocadoRadioDiv;