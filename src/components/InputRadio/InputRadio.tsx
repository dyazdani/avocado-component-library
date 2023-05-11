import React from "react";
import { RadioDivProps } from "../RadioDiv/RadioDiv";


const InputRadio = ({name, id, value}: RadioDivProps) => {
  
  return (
          <input
            type="radio"
            name={name}
            id={id} 
            value={value}
            data-testid="avocado-input-radio"
          />
        )
};

export default InputRadio;