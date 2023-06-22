import React, { ReactNode } from "react";
import AvocadoRadioGroupItem from "../AvocadoRadioGroupItem/AvocadoRadioGroupItem";
import { useContext, PropsWithChildren } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoRadioGroupProps {
  name: string
  legend: string
}

const AvocadoRadioGroup = ({
  name,
  legend,
   children,
  }: PropsWithChildren<AvocadoRadioGroupProps>) => {
    const theme = useContext(AvocadoThemeContext)
//TODO: Throw an error if it receives a type that you do not want (i.e., not a radio group item)
  return (
      <fieldset data-testid="avocado-radio-group" className={`avocado-radio-group ${theme}`}>
        <legend data-testid='radio-legend'>
          {legend}
        </legend>
        {children}
      </fieldset>
  )
};

export default AvocadoRadioGroup;