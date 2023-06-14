import React from "react";
import { useContext, useState } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

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

  const beyondMinMax = (min: number, max: number, number: number | string) => {
    console.log(number)
    if (number === '') {
      return '';
    }
    if (number > max || number < min) {
      return 'beyond-min-max'
    } else {
      return '';
    }
  }

  return (
          <input
          className={`avocado-number-selector ${theme} ${beyondMinMax(min, max, number)}`}
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