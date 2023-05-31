import React from "react";
import AvocadoRadioDiv from "../AvocadoRadioDiv/AvocadoRadioDiv";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoRadioDivProps {
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
  labelThree}: AvocadoRadioDivProps) => {
    const theme = useContext(AvocadoThemeContext)

  return (
      <fieldset data-testid="avocado-radio-group" className={`avocado-radio-group ${theme}`}>
        <legend data-testid='radio-legend'>
          {legend}
        </legend>
        <AvocadoRadioDiv 
          id={idOne}
          name={name}
          label={labelOne}
          value={idOne}
        />
        <AvocadoRadioDiv 
          id={idTwo}
          name={name}
          label={labelTwo}
          value={idTwo}
        />
        <AvocadoRadioDiv 
          id={idThree}
          name={name}
          label={labelThree}
          value={idThree}
        />
      </fieldset>
  )
};

export default AvocadoRadioGroup;