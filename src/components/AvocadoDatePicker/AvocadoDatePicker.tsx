import React from "react";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

interface AvocadoDatePickerProps {
  name: string
  required: boolean
  step: number
  min: `${number}-${number}-${number}`
  max: `${number}-${number}-${number}`
  value: `${number}-${number}-${number}`
  handleChange: () => void

}


const AvocadoDatePicker = ({name, required, min, max, step, value, handleChange}: AvocadoDatePickerProps) => {
  const theme = useContext(AvocadoThemeContext)


  return (
          <input
          className={`avocado-date-picker ${theme}`}
            type="date"
            name={name}
            min={min}
            max={max}
            step={step}
            data-testid="avocado-date-picker"
            required={required}
            value={value}
            onChange={handleChange}
          />
        )
};

export default AvocadoDatePicker;