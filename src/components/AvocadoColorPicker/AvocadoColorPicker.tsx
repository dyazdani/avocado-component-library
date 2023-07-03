import React, { ChangeEvent } from "react";
import {useContext} from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

interface AvocadoColorPickerProps {
  id?: string
  name?: string
  value?: string
  disabled?: boolean
  onInput?: (e: ChangeEvent<HTMLInputElement>) => void
}


const AvocadoColorPicker = ({name, id, value, disabled, onInput}: AvocadoColorPickerProps) => {
  const theme = useContext(AvocadoThemeContext)

  return (
          <input
            className={`avocado-color-picker ${theme}`}
            type="color"
            name={name}
            data-testid="avocado-color-picker"
            id={id}
            disabled={disabled}
            value={value}
            onInput={onInput}
          />
        )
};

export default AvocadoColorPicker;