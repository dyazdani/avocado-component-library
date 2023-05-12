import React from "react";

interface DatePickerProps {
  name: string
  required: boolean
}


const DatePicker = ({name, required}: DatePickerProps) => {
  
  return (
          <input
            type="date"
            name={name}
            data-testid="avocado-date-picker"
            required={required}
          />
        )
};

export default DatePicker;