import React, {ChangeEvent} from "react";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoSliderProps {
  id?: string
  name?: string
  min?: number
  max?: number
  step?: number
  value?: string
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const AvocadoSlider = ({id, name, min, max, step, disabled, value, onChange}: AvocadoSliderProps) => {
  const theme = useContext(AvocadoThemeContext)

  return (
      <input 
        className={`avocado-slider ${theme}`}
        type="range"  
        id={id}
        name={name}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        data-testid="avocado-slider"
        value={value}
        onChange={onChange}
      />
  )
};

export default AvocadoSlider;