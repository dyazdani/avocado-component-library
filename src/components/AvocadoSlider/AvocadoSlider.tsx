import React, {ChangeEvent} from "react";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoSliderProps {
  id: string
  name: string
  min: number
  max: number
  step: number
  value: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const AvocadoSlider = ({id, name, min, max, step, value, onChange}: AvocadoSliderProps) => {
  const theme = useContext(AvocadoThemeContext)

  return (
      <input 
        className={`avocado-slider ${theme}`}
        type="range"  
        id={id}
        name={name}
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