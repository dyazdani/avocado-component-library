import React, { ChangeEvent } from "react";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

interface AvocadoDatePickerProps {
  name?: string
  required?: boolean
  disabled?: boolean
  step?: `${number}`
  min?: `${number}-${number}-${number}`
  max?: `${number}-${number}-${number}`
  value?: `${number}-${number}-${number}`
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void

}


const AvocadoDatePicker = ({name, required, min, max, step, value, disabled, onChange}: AvocadoDatePickerProps) => {
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
            disabled={disabled}
            value={value}
            onChange={onChange}
          />
        )
};

export default AvocadoDatePicker;