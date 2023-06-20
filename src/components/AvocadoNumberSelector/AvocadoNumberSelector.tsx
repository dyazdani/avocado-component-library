import React, { ChangeEvent } from "react";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";
import isWithinRange from "../../utilities";

interface AvocadoNumberSelectorProps {
  name: string
  id?: string
  min?: string
  max?: string
  step?: string
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  // onChange: (value: string) => void
}


const AvocadoNumberSelector = ({name, id, min, max, step, placeholder, value, onChange}: AvocadoNumberSelectorProps) => {
  const theme = useContext(AvocadoThemeContext)

  const showError = !isWithinRange(min, max, value);

  return (
          <input
          className={`avocado-number-selector ${theme} ${showError && 'beyond-min-max'}`}
          type="number"
            name={name}
            id={id}
            min={min}
            max={max}
            step={step}
            placeholder={placeholder}
            data-testid="avocado-number-selector"
            value={value}
            onChange={onChange}
            // onChange={e => onChange(e.target.value)}
          />
        )
};

export default AvocadoNumberSelector;