import React, { ChangeEvent } from "react";
import { useState, useContext} from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

interface AvocadoColorPickerProps {
  id?: string
  name?: string
  value?: string
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}


const AvocadoColorPicker = ({name, id, value, disabled, onChange}: AvocadoColorPickerProps) => {
  // const [color, setColor] = useState('#74332c');
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
            onChange={onChange}
          />
        )
};

export default AvocadoColorPicker;