import React from "react";
import { useContext, PropsWithChildren } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoRadioGroupProps {
  name: string
  legend?: string
  id?: string
  disabled?: boolean
}

const AvocadoRadioGroup = ({
  name,
  legend,
  children
}: PropsWithChildren<AvocadoRadioGroupProps>) => {
  const theme = useContext(AvocadoThemeContext)

  const childrenWithName = React.Children.map(children, (child: React.ReactNode) => {
    return React.cloneElement((child as React.ReactElement), {
      name: name,
    });
  });
  
  return legend ? (
    <fieldset data-testid="avocado-radio-group" className={`avocado-radio-group ${theme}`}>
      <legend data-testid='radio-legend'>{legend}</legend>
      {childrenWithName}
    </fieldset>
  ) : 
    <fieldset data-testid="avocado-radio-group" className={`avocado-radio-group ${theme}`}>
      {childrenWithName}
    </fieldset>
};

export default AvocadoRadioGroup;