import React from "react";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoSliderProps {
  id: string
  name: string
  min: number
  max: number
  step: number
}

const AvocadoSlider = ({id, name, min, max, step}: AvocadoSliderProps) => {
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
      />
  )
};

export default AvocadoSlider;