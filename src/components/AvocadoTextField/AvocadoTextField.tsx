import React from "react";
import { AvocadoTextFieldDivProps } from "../AvocadoTextFieldDiv/AvocadoTextFieldDiv";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";


const AvocadoTextField = ({id, name, placeholder}: AvocadoTextFieldDivProps ) => {
  const theme = useContext(AvocadoThemeContext)

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

export default AvocadoTextField;