import React from "react";
import InputRadio from "../InputRadio/InputRadio";
import Label from "../Label/Label";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export interface RadioDivProps {
  id: string
  name: string
  label: string
  value: string
}

const RadioDiv = ({id, name, label, value}: RadioDivProps) => {
  const theme = useContext(ThemeContext)
  return (
      <div data-testid={`avocado-radio-div-${id}`} className={`avocado-radio-div ${theme}`}>
        <InputRadio
          name={name} 
          id={id}
          value={value}
          data-testid="avocado-radio-div"
        />
        <Label id={id} label={label}/>
      </div>
  )
};

export default RadioDiv;