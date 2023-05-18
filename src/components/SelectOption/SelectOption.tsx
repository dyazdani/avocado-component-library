import React from "react";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

interface SelectOptionProps {
  value: string
}

const SelectOption = ({value}: SelectOptionProps) => {
  const theme = useContext(ThemeContext);
  return (
          <option
            className={`avocado-select-option ${theme}`}
            value={value} 
            data-testid="avocado-select-option-{value}">{value}
          </option>
        )
};

export default SelectOption;