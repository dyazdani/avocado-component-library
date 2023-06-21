import React from "react";
import { useContext, PropsWithChildren } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoRadioGroupProps {
  name: string
  legend?: string
  label: string
  value?: string
  id: string
  checked?: boolean
  required?: boolean 
}

const AvocadoRadioGroup = ({
  name,
  legend,
  label,
  value,
  id,
  checked,
  required,
  children
}: PropsWithChildren<AvocadoRadioGroupProps>) => {
  const theme = useContext(AvocadoThemeContext)
//TODO: Throw an error if it receives a type that you do not want (i.e., not a radio group item)

  const renderChildren = () => {
    return React.Children.map(children, (child: React.ReactNode) => {
      return React.cloneElement((child as React.ReactElement), {
        name: name,
        label: label,
        value: value,
        id: id,
        checked: checked,
        required: required, 
        });
    });
  };
  
  return legend ? (
      <fieldset data-testid="avocado-radio-group" className={`avocado-radio-group ${theme}`}>
        <legend data-testid='radio-legend'>
          {legend}
        </legend>
        {renderChildren()}
      </fieldset>
  ) : <fieldset data-testid="avocado-radio-group" className={`avocado-radio-group ${theme}`}>
        {renderChildren()}
      </fieldset>
};

export default AvocadoRadioGroup;