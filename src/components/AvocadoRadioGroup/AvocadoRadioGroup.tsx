//TODO: control this component after merging changes from children branch
import React from "react";
import AvocadoRadioGroupItem from "../AvocadoRadioGroupItem/AvocadoRadioGroupItem";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoRadioGroupProps {
  name: string
  legend: string
  idOne: string
  labelOne: string
  valueOne: string
  idTwo: string
  labelTwo: string
  valueTwo: string
  idThree: string
  labelThree: string
  valueThree: string
}

const AvocadoRadioGroup = ({
  name,
  legend, 
  idOne, 
  labelOne, 
  idTwo, 
  labelTwo, 
  idThree, 
  labelThree}: AvocadoRadioGroupProps) => {
    const theme = useContext(AvocadoThemeContext)

  return (
      <fieldset data-testid="avocado-radio-group" className={`avocado-radio-group ${theme}`}>
        <legend data-testid='radio-legend'>
          {legend}
        </legend>
        <AvocadoRadioGroupItem 
          id={idOne}
          name={name}
          label={labelOne}
          value={idOne}
        />
        <AvocadoRadioGroupItem
          id={idTwo}
          name={name}
          label={labelTwo}
          value={idTwo}
        />
        <AvocadoRadioGroupItem
          id={idThree}
          name={name}
          label={labelThree}
          value={idThree}
        />
      </fieldset>
  )
};

export default AvocadoRadioGroup;