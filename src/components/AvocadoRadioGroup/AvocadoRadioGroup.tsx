import React from "react";
import { useContext, PropsWithChildren } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoRadioGroupProps {
  name: string
  legend: string
  label: string
  value?: string
  id: string
  checked?: boolean
}

const AvocadoRadioGroup = ({
  name,
  legend,
  label,
  value,
  id,
  checked,
  children,
  }: PropsWithChildren<AvocadoRadioGroupProps>) => {
    const theme = useContext(AvocadoThemeContext)
//TODO: Throw an error if it receives a type that you do not want (i.e., not a radio group item)

const renderChildren() => {
  return React.Children.map(children, (child) => {
  return React.cloneElement(child, {
    name: name,
    label: label,
    value: value,
    id: id,
    checked: checked, 
    });
  });
};
  
  return (
      <fieldset data-testid="avocado-radio-group" className={`avocado-radio-group ${theme}`}>
        <legend data-testid='radio-legend'>
          {legend}
        </legend>
        {renderChildren()}
      </fieldset>
  )
};

export default AvocadoRadioGroup;