import React from "react";
import AvocadoLabel from "../AvocadoLabel/AvocadoLabel";
import AvocadoTextInput from "../AvocadoTextField/AvocadoTextInput";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoTextFieldProps {
  id: string
  name: string
  label: string
  placeholder: string
}

const AvocadoTextField = ({id, name, label, placeholder}: AvocadoTextFieldProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
      <div data-testid="avocado-text-field" className={`avocado-text-field ${theme}`}>
        <AvocadoTextInput
          name={name} 
          id={id}
          placeholder={placeholder}
        />
        <AvocadoLabel id={id} label={label}/>
      </div>
  )
};

export default AvocadoTextField;