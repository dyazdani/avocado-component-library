import React, { ChangeEvent } from "react";
import { useContext, useState } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";
import isWithinRange from "../../functions";

interface AvocadoNumberSelectorProps {
  name: string
  id?: string
  min?: number
  max?: number
  step?: number | string
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  // onChange: (value: string) => void
}


const AvocadoNumberSelector = ({name, id, min, max, step, placeholder, value, onChange}: AvocadoNumberSelectorProps) => {
  // const [number, setNumber] = useState('');
  const theme = useContext(AvocadoThemeContext)

  // TODO: Handle undefined in isWithinRange
  const showError = min && max && !isWithinRange(min, max, value);

  return (
          <input
          //TODO: check that && does not return false or 'false' or something else 
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