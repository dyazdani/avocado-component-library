import React from "react";
import { RadioDivProps } from "../RadioDiv/RadioDiv";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";


const InputRadio = ({name, value}: RadioDivProps) => {
  const theme = useContext(ThemeContext)

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
