import React from "react";
import { TextFieldDivProps } from "../TextFieldDiv/TextFieldDiv";


const TextField = ({id, name, placeholder}: TextFieldDivProps ) => {
  
  return (
          <input
            type="text"
            data-testid="avocado-text-field"
            placeholder={placeholder}
            id={id}
            name={name}
          />
        )
};

export default TextField;