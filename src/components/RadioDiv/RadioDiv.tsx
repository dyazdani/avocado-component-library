import React from "react";
import InputRadio from "../InputRadio/InputRadio";
import Label from "../Label/Label";

export interface RadioDivProps {
  id: string
  name: string
  label: string
}

const RadioDiv = ({id, name, label}: RadioDivProps) => {
  return (
      <div data-testid="avocado-radio-div">
        <InputRadio
          name={name} 
          id={id}
        />
        <Label id={id} label={label}/>
      </div>
  )
};

export default RadioDiv;