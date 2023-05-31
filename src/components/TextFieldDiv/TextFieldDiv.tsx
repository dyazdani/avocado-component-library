import React from "react";
import Label from "../Label/Label";
import TextField from "../TextField/TextField";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export interface TextFieldDivProps {
  id: string
  name: string
  label: string
  placeholder: string
}

const TextFieldDiv = ({id, name, label, placeholder}: TextFieldDivProps) => {
  const theme = useContext(ThemeContext)
  return (
      <div data-testid="avocado-text-field-div" className={`avocado-text-field-div ${theme}`}>
        <TextField
          name={name} 
          id={id}
          placeholder={placeholder}
        />
        <Label id={id} label={label}/>
      </div>
  )
};

export default TextFieldDiv;