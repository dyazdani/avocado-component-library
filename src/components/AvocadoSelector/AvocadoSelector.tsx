import React from "react";
import { useContext } from "react";
import AvocadoSelectOption from "../AvocadoSelectOption/AvocadoSelectOption";
import {AvocadoSelectorDivProps} from "../AvocadoSelectorDiv/AvocadoSelectorDiv"
import { AvocadoThemeContext } from "../AvocadoThemeContext";


const AvocadoSelector = ({name, id, valueOne, valueTwo, valueThree}: AvocadoSelectorDivProps) => {
  const theme = useContext(AvocadoThemeContext);
  return (
          <select
            className={`avocado-selector ${theme}`}
            name={name}
            id={id}
            data-testid="avocado-selector">
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

export default AvocadoSelector;