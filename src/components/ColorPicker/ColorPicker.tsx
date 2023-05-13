import React from "react";
import { useState } from "react";

interface ColorPickerProps {
  id: string
  name: string
}


const ColorPicker = ({name, id}: ColorPickerProps) => {
  const [color, setColor] = useState(null);
  
  return (
          <input
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