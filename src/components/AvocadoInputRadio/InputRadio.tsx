//TODO: Control component after merging changes from children branch
import React from "react";
import { AvocadoRadioGroupItemProps } from "../AvocadoRadioGroupItem/AvocadoRadioGroupItem";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";


const InputRadio = ({name, value}: AvocadoRadioGroupItemProps) => {
  const theme = useContext(AvocadoThemeContext)

  return (
          <input
          className={`avocado-input-radio ${theme}`}
            type="radio"
            name={name}
            value={value}
            data-testid="avocado-input-radio"
          />
        )
};
