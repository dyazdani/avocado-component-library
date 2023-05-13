import React from "react";
import RadioDiv from "../RadioDiv/RadioDiv";

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
  valueOne,  
  idTwo, 
  labelTwo, 
  valueTwo, 
  idThree, 
  labelThree, 
  valueThree}: RadioDivProps) => {
  return (
      <fieldset data-testid="radio-group">
        <legend>
          {legend}
        </legend>
        <RadioDiv 
          id={idOne}
          name={name}
          label={labelOne}
          value={valueOne}
        />
        <RadioDiv 
          id={idTwo}
          name={name}
          label={labelTwo}
          value={valueTwo}
        />
        <RadioDiv 
          id={idThree}
          name={name}
          label={labelThree}
          value={valueThree}
        />
      </fieldset>
  )
};

export default RadioGroup;