import React from "react";
import AvocadoSelect from "../AvocadoSelect/AvocadoSelect";
import AvocadoLabel from "../AvocadoLabel/AvocadoLabel";
import { useContext, PropsWithChildren } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoSelectorProps {
  id: string
  name: string
  label: string
}

const AvocadoSelector = ({
  id, 
  name, 
  label, 
  children
  }: PropsWithChildren<AvocadoSelectorProps>) => {
    const theme = useContext(AvocadoThemeContext)

  return (
      <div data-testid="avocado-selector" className={`avocado-selector ${theme}`}>
        <AvocadoLabel htmlFor={id} label={label}/>
        {children}
      </div>
  )
};

export default AvocadoSelector;