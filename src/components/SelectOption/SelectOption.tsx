import React from "react";
import { ThemeContext } from "../Contexts";
import { useState, useContext } from "react";


const SelectOption = ({value}) => {
  
  return (
          <option
            value={value} 
            data-testid="avocado-select-option-{value}">{value}
          </option>
        )
};

export default SelectOption;