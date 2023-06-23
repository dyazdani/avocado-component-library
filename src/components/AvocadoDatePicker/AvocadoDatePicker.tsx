import React, { ChangeEvent } from "react";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

interface AvocadoDatePickerProps {
  id?: string
  name?: string
  required?: boolean
  disabled?: boolean
  step?: `${number}`
  min?: `${number}-${number}-${number}`
  max?: `${number}-${number}-${number}`
  value?: `${number}-${number}-${number}`
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void

}


const AvocadoDatePicker = ({id, name, required, min, max, step, value, disabled, onChange}: AvocadoDatePickerProps) => {
  const theme = useContext(AvocadoThemeContext)


  return (
          <input
          className={`avocado-date-picker ${theme}`}
            type="date"
            id={id}
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