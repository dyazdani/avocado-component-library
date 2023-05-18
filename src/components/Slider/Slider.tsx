import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export interface SliderProps {
  id: string
  name: string
  min: number
  max: number
  step: number
}

const Slider = ({id, name, min, max, step}: SliderProps) => {
  const theme = useContext(ThemeContext)

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

export default Slider;