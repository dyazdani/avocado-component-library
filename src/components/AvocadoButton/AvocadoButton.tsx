import React, { FormEvent } from "react";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoButtonProps {
  id?: string
  name?: string
  type: "button" | "reset" | "submit"
  disabled?: boolean
  value?: string
  buttonText?: string
  onClick?: (e: FormEvent<HTMLButtonElement>) => void 
}

const AvocadoButton = ({
  id, 
  name, 
  type, 
  disabled, 
  buttonText, 
  onClick}: AvocadoButtonProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
      <button
        className={`avocado-button ${theme}`}
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        onClick={onClick}
        data-testid="avocado-button"
      >{buttonText}</button>
  )
};

export default AvocadoButton;

// This is for testing GitHub Action