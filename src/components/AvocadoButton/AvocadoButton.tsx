import React from "react";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoButtonProps {
  id: string
  name: string
  type: "button" | "reset" | "submit"
  disabled: boolean
  buttonText: string
}

const AvocadoButton = ({id, name, type, disabled, buttonText}: AvocadoButtonProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
      <button
        className={`avocado-button ${theme}`}
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        data-testid="avocado-button"
      >{buttonText}</button>
  )
};

export default AvocadoButton;