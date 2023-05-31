import React from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";
import { useContext } from "react";

interface AvocadoSelectOptionProps {
  value: string
}

const AvocadoSelectOption = ({value}: AvocadoSelectOptionProps) => {
  const theme = useContext(AvocadoThemeContext);
  return (
          <option
            className={`avocado-select-option ${theme}`}
            value={value} 
            data-testid="avocado-select-option-{value}">{value}
          </option>
        )
};

export default AvocadoSelectOption;