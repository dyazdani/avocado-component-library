import React from "react";
import { ThemeContext } from "../Contexts";
import { useState, useContext } from "react";

interface SelectOptionProps {
  value: string
}

const SelectOption = ({value}: SelectOptionProps) => {
  
  return (
          <option
            value={value} 
            data-testid="avocado-select-option-{value}">{value}
          </option>
        )
};

export default SelectOption;