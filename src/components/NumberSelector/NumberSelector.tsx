import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

interface NumberSelectorProps {
  name: string
  id: string
  min: number
  max: number
  step: number
  placeholder: string
}


const NumberSelector = ({name, id, min, max, step, placeholder}: NumberSelectorProps) => {
  const theme = useContext(ThemeContext)

  return (
          <input
          className={`avocado-number-selector ${theme}`}
          type="number"
            name={name}
            id={id}
            min={min}
            max={max}
            step={step}
            placeholder={placeholder}
            data-testid="avocado-number-selector"
          />
        )
};

export default NumberSelector;