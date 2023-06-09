import React from "react";
import { useContext } from "react";
import AvocadoSelectOption from "../AvocadoSelectOption/AvocadoSelectOption";
import {AvocadoSelectorProps} from "../AvocadoSelector/AvocadoSelector"
import { AvocadoThemeContext } from "../AvocadoThemeContext";


const AvocadoSelect = ({name, id, valueOne, valueTwo, valueThree}: AvocadoSelectorProps) => {
  const theme = useContext(AvocadoThemeContext);
  return (
          <select
            className={`avocado-select ${theme}`}
            name={name}
            id={id}
            data-testid="avocado-select">
            <option
              value="" 
              data-testid="avocado-select-option-instructions">--Please choose an option--
            </option>
            <AvocadoSelectOption value={valueOne}/>
            <AvocadoSelectOption value={valueTwo}/>
            <AvocadoSelectOption value={valueThree}/>
          </select>
          
          
        )
};

export default AvocadoSelect;