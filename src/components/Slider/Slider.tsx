import React from "react";

export interface SliderProps {
  id: string
  name: string
  min: number
  max: number
  step: number
}

const Slider = ({id, name, min, max, step}: SliderProps) => {
  return (
      <input 
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