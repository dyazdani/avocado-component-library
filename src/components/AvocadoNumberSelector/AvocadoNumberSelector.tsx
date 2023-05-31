import React from "react";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

interface AvocadoNumberSelectorProps {
  name: string
  id: string
  min: number
  max: number
  step: number
  placeholder: string
}


const AvocadoNumberSelector = ({name, id, min, max, step, placeholder}: AvocadoNumberSelectorProps) => {
  const theme = useContext(AvocadoThemeContext)

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

export default AvocadoNumberSelector;