import React from "react";
import AvocadoSelector from "../AvocadoSelector/AvocadoSelector";
import AvocadoLabel from "../AvocadoLabel/AvocadoLabel";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoSelectorDivProps {
  id: string
  name: string
  label: string
  valueOne: string
  valueTwo: string
  valueThree: string
}

const AvocadoSelectorDiv = ({id, name, label, valueOne, valueTwo, valueThree}: AvocadoSelectorDivProps) => {
  const theme = useContext(AvocadoThemeContext)

  return (
      <div data-testid="avocado-selector-div" className={`avocado-selector-div ${theme}`}>
        <AvocadoLabel id={id} label={label}/>
        <AvocadoSelector
          name={name} 
          id={id}
          valueOne={valueOne}
          valueTwo={valueTwo}
          valueThree={valueThree}
        />
      </div>
  )
};

export default AvocadoSelectorDiv;