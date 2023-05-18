import React from "react";
import Selector from "../Selector/Selector";
import Label from "../Label/Label";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export interface SelectorDivProps {
  id: string
  name: string
  label: string
  valueOne: string
  valueTwo: string
  valueThree: string
}

const SelectorDiv = ({id, name, label, valueOne, valueTwo, valueThree}: SelectorDivProps) => {
  const theme = useContext(ThemeContext)

  return (
      <div data-testid="avocado-selector-div" className={`avocado-selector-div ${theme}`}>
        <Label id={id} label={label}/>
        <Selector
          name={name} 
          id={id}
          valueOne={valueOne}
          valueTwo={valueTwo}
          valueThree={valueThree}
        />
      </div>
  )
};

export default SelectorDiv;