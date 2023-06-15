import React from "react";
import AvocadoLabel from "../AvocadoLabel/AvocadoLabel";
import AvocadoTextInput from "../AvocadoTextInput/AvocadoTextInput";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoTextFieldProps {
  id: string
  name: string
  label: string
  value: string
  placeholder: string
  handleChange: () => void
}

const AvocadoTextField = ({id, name, label, placeholder, value, handleChange}: AvocadoTextFieldProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
      <div data-testid="avocado-text-field" className={`avocado-text-field ${theme}`}>
        <AvocadoTextInput
          name={name} 
          id={id}
          placeholder={placeholder}
          handleChange={handleChange}
          value={value}
        />
        <AvocadoLabel id={id} label={label}/>
      </div>
  )
};

export default AvocadoTextField;