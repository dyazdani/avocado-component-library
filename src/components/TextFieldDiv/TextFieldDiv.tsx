import React from "react";
import Label from "../Label/Label";
import TextField from "../TextField/TextField";

export interface TextFieldDivProps {
  id: string
  name: string
  label: string
  placeholder: string
}

const TextFieldDiv = ({id, name, label, placeholder}: TextFieldDivProps) => {
  return (
      <div data-testid="avocado-text-field-div">
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