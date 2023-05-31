import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export interface ButtonProps {
  id: string
  name: string
  type: "button" | "reset" | "submit"
  disabled: boolean
  buttonText: string
}

const Button = ({id, name, type, disabled, buttonText}: ButtonProps) => {
  const theme = useContext(ThemeContext)
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

export default Button;