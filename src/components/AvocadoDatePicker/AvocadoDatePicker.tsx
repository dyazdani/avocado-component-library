import React from "react";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

interface AvocadoDatePickerProps {
  name: string
  required: boolean
}


const AvocadoDatePicker = ({name, required}: AvocadoDatePickerProps) => {
  const theme = useContext(AvocadoThemeContext)

  return (
          <input
          className={`avocado-date-picker ${theme}`}
            type="date"
            name={name}
            data-testid="avocado-date-picker"
            required={required}
          />
        )
};

export default AvocadoDatePicker;