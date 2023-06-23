import React, { ChangeEvent } from "react";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoButtonProps {
  id?: string
  name?: string
  type: "button" | "reset" | "submit"
  disabled?: boolean
  value?: string
  buttonText?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const AvocadoButton = ({
  id, 
  name, 
  type, 
  disabled, 
  buttonText, 
  onChange}: AvocadoButtonProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
      <button
        className={`avocado-button ${theme}`}
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        onChange={onChange}
        data-testid="avocado-button"
      >{buttonText}</button>
  )
};

export default AvocadoButton;