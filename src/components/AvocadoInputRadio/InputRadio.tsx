import React from "react";
import { RadioDivProps } from "../AvocadoRadioDiv/AvocadoRadioDiv";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";


const InputRadio = ({name, value}: RadioDivProps) => {
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

export default InputRadio;