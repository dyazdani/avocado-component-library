import React from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";
import { useContext } from "react";

interface AvocadoSelectOptionProps {
  value?: string
  textContent?: string
  disabled?: boolean
  selected?: boolean
}

const AvocadoSelectOption = ({value, textContent}: AvocadoSelectOptionProps) => {
  const theme = useContext(AvocadoThemeContext);
  return (
          <option
            className={`avocado-select-option ${theme}`}
            value={value} 
            data-testid="avocado-select-option-{value}">{textContent}
          </option>
        )
};

export default AvocadoSelectOption;