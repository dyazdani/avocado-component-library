import React from "react";
import { AvocadoTextFieldProps } from "../AvocadoTextField/AvocadoTextField";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";


const AvocadoTextInput = ({id, value, name, placeholder, onChange}: AvocadoTextFieldProps ) => {
  const theme = useContext(AvocadoThemeContext)

  return (
          <input
            className={`avocado-text-input ${theme}`}
            type="text"
            data-testid="avocado-text-input"
            placeholder={placeholder}
            id={id}
            value={value}
            onChange={onChange}
            name={name}
          />
        )
};

export default AvocadoTextInput;