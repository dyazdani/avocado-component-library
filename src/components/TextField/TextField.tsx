import React from "react";
import { TextFieldDivProps } from "../TextFieldDiv/TextFieldDiv";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";


const TextField = ({id, name, placeholder}: TextFieldDivProps ) => {
  const theme = useContext(ThemeContext)

  return (
          <input
            className={`avocado-text-field ${theme}`}
            type="text"
            data-testid="avocado-text-field"
            placeholder={placeholder}
            id={id}
            name={name}
          />
        )
};

export default TextField;