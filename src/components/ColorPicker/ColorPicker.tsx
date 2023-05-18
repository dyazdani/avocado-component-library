import React from "react";
import { useState, useContext} from "react";
import { ThemeContext } from "../ThemeContext";

interface ColorPickerProps {
  id: string
  name: string
}


const ColorPicker = ({name, id}: ColorPickerProps) => {
  const [color, setColor] = useState(null);
  const theme = useContext(ThemeContext)

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

export default ColorPicker;