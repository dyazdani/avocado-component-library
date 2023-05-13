import React from "react";
import { ThemeContext } from "../Contexts";
import { useState, useContext } from "react";
import SelectOption from "../SelectOption/SelectOption";
import {SelectorDivProps} from "../SelectorDiv/SelectorDiv"


const Selector = ({name, id, valueOne, valueTwo, valueThree}: SelectorDivProps) => {
  
  return (
          <select
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