import React from "react";
import AvocadoLabel from "../AvocadoLabel/AvocadoLabel";
import AvocadoTextField from "../AvocadoTextField/AvocadoTextField";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoTextFieldDivProps {
  id: string
  name: string
  label: string
  placeholder: string
}

const AvocadoTextFieldDiv = ({id, name, label, placeholder}: AvocadoTextFieldDivProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
      <div data-testid="avocado-text-field-div" className={`avocado-text-field-div ${theme}`}>
        <AvocadoTextField
          name={name} 
          id={id}
          placeholder={placeholder}
        />
        <AvocadoLabel id={id} label={label}/>
      </div>
  )
};

export default AvocadoTextFieldDiv;