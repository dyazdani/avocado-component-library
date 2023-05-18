import React from "react";
import { useContext } from "react";
import SelectOption from "../SelectOption/SelectOption";
import {SelectorDivProps} from "../SelectorDiv/SelectorDiv"
import { ThemeContext } from "../ThemeContext";


const Selector = ({name, id, valueOne, valueTwo, valueThree}: SelectorDivProps) => {
  const theme = useContext(ThemeContext);
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
            <SelectOption value={valueOne}/>
            <SelectOption value={valueTwo}/>
            <SelectOption value={valueThree}/>
          </select>
          
          
        )
};

export default Selector;