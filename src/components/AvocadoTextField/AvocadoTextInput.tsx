import React from "react";
import { AvocadoTextFieldProps } from "../AvocadoTextFieldDiv/AvocadoTextField";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";


const AvocadoTextInput = ({id, name, placeholder}: AvocadoTextFieldProps ) => {
  const theme = useContext(AvocadoThemeContext)

  return (
          <input
            className={`avocado-text-input ${theme}`}
            type="text"
            data-testid="avocado-text-input"
            placeholder={placeholder}
            id={id}
            name={name}
          />
        )
};

export default AvocadoTextInput;