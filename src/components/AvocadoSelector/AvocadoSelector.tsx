import React from "react";
import { useContext, PropsWithChildren } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

interface AvocadoSelectorProps {
  id: string
  name: string
  selectMessage?: string
}

const AvocadoSelector = ({
  id, 
  name,
  selectMessage, 
  children
  }: PropsWithChildren<AvocadoSelectorProps>) => {
  const theme = useContext(AvocadoThemeContext)

  return (
    <select
      className={`avocado-select ${theme}`}
      name={name}
      id={id}
      data-testid="avocado-select">
        <option
          value="" 
          data-testid="avocado-select-option-instructions">{selectMessage}
        </option>
        {children}
    </select>
  )
};

export default AvocadoSelector;