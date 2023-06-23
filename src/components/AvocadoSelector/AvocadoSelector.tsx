//TODO: Control component after merging changes from children branch
//TODO: Move AvocadoSelect adn AvocadoSelectOption to this module after merging changes from children branch
import React from "react";
import AvocadoSelect from "../AvocadoSelect/AvocadoSelect";
import AvocadoLabel from "../AvocadoLabel/AvocadoLabel";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoSelectorProps {
  id: string
  name: string
  label: string
  valueOne: string
  valueTwo: string
  valueThree: string
}

const AvocadoSelector = ({id, name, label, valueOne, valueTwo, valueThree}: AvocadoSelectorProps) => {
  const theme = useContext(AvocadoThemeContext)

  return (
      <div data-testid="avocado-selector" className={`avocado-selector ${theme}`}>
        <AvocadoLabel id={id} label={label}/>
        <AvocadoSelect
          name={name}
          id={id}
          valueOne={valueOne}
          valueTwo={valueTwo}
          valueThree={valueThree}
        />
      </div>
  )
};

export default AvocadoSelector;