import React from "react";
import { useContext, useState } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";
import isWithinRange from "../../functions";

interface AvocadoNumberSelectorProps {
  name: string
  id: string
  min: number
  max: number
  step: number | string
  placeholder: string
}


const AvocadoNumberSelector = ({name, id, min, max, step, placeholder}: AvocadoNumberSelectorProps) => {
  const [number, setNumber] = useState('');
  const theme = useContext(AvocadoThemeContext)

  return (
          <input
          className={`avocado-number-selector ${theme} ${!isWithinRange(min, max, number) && 'beyond-min-max'}`}
          type="number"
            name={name}
            id={id}
            min={min}
            max={max}
            step={step}
            placeholder={placeholder}
            data-testid="avocado-number-selector"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        )
};

export default AvocadoNumberSelector;