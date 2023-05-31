import React from "react";
import { useState, useContext} from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

interface AvocadoColorPickerProps {
  id: string
  name: string
}


const AvocadoColorPicker = ({name, id}: AvocadoColorPickerProps) => {
  const [color, setColor] = useState('#74332c');
  const theme = useContext(AvocadoThemeContext)

  return (
          <input
            className={`avocado-color-picker ${theme}`}
            type="color"
            name={name}
            data-testid="avocado-color-picker"
            id={id}
            value={color}
            onChange={e => setColor(e.target.value)}
          />
        )
};

export default AvocadoColorPicker;