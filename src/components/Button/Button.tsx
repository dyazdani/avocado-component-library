import React from "react";

export interface ButtonProps {
  id: string
  name: string
  type: "button" | "reset" | "submit"
  disabled: boolean
  buttonText: string
}

const Button = ({id, name, type, disabled, buttonText}: ButtonProps) => {
  return (
      <button
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        data-testid="avocado-button"
      >{buttonText}</button>
  )
};

export default Button;