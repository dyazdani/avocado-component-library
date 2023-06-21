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
  form?: string
  formAction?: string
  formEncType?: "multipart/form-data" | "text/plain"
  formNoValidate?: boolean
  formTarget?: "_blank" | "_parent" | "_top" | `_${string}`
  formMethod?: "post" | "get"
  popoverTarget?: string
  popoverTargetAction?: "hide" | "show"
  autoFocus?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const AvocadoButton = ({
  id, 
  name, 
  form, 
  type, 
  disabled, 
  autoFocus,
  formAction,
  formEncType,
  formNoValidate,
  formTarget,
  formMethod,
  popoverTarget,
  popoverTargetAction, 
  buttonText, 
  onChange}: AvocadoButtonProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
      <button
        className={`avocado-button ${theme}`}
        id={id}
        name={name}
        type={type}
        form={form}
        formAction={formAction}
        formEncType={formEncType}
        formNoValidate={formNoValidate}
        formTarget={formTarget}
        formMethod={formMethod}
        popoverTarget={popoverTarget}
        popoverTargetAction={popoverTargetAction}
        disabled={disabled}
        autofocus={autoFocus}
        onChange={onChange}
        data-testid="avocado-button"
      >{buttonText}</button>
  )
};

export default AvocadoButton;