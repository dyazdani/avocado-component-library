import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

interface DatePickerProps {
  name: string
  required: boolean
}


const DatePicker = ({name, required}: DatePickerProps) => {
  const theme = useContext(ThemeContext)

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

export default DatePicker;