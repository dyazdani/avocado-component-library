import React from "react";

interface NumberSelectorProps {
  name: string
  id: string
  min: number
  max: number
  step: number
  placeholder: string
}


const NumberSelector = ({name, id, min, max, step, placeholder}: NumberSelectorProps) => {
  
  return (
          <input
            type="number"
            name={name}
            id={id}
            min={min}
            max={max}
            step={step}
            placeholder={placeholder}
            data-testid="avocado-number-selector"
          />
        )
};

export default NumberSelector;