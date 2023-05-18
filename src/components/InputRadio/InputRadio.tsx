import React from "react";
import { RadioDivProps } from "../RadioDiv/RadioDiv";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";


const InputRadio = ({name, id, value}: RadioDivProps) => {
  const theme = useContext(ThemeContext)

  return (
          <input
          className={`avocado- ${theme}`}
            type="radio"
            name={name}
            id={id} 
            value={value}
            data-testid="avocado-input-radio"
          />
        )
};

export default InputRadio;