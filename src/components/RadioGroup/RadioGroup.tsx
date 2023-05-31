import React from "react";
import RadioDiv from "../RadioDiv/RadioDiv";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export interface RadioDivProps {
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

const RadioGroup = ({
  name,
  legend, 
  idOne, 
  labelOne, 
  idTwo, 
  labelTwo, 
  idThree, 
  labelThree}: RadioDivProps) => {
    const theme = useContext(ThemeContext)

  return (
      <fieldset data-testid="avocado-radio-group" className={`avocado-radio-group ${theme}`}>
        <legend data-testid='radio-legend'>
          {legend}
        </legend>
        <RadioDiv 
          id={idOne}
          name={name}
          label={labelOne}
          value={idOne}
        />
        <RadioDiv 
          id={idTwo}
          name={name}
          label={labelTwo}
          value={idTwo}
        />
        <RadioDiv 
          id={idThree}
          name={name}
          label={labelThree}
          value={idThree}
        />
      </fieldset>
  )
};

export default RadioGroup;