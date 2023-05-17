import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { CheckboxProps } from "../Checkbox/Checkbox";


const Label = ({label, id}: CheckboxProps) => {
  const theme = useContext(ThemeContext)
  return (
    <label
      htmlFor={id} className={'avocado-label-' + theme} data-testid="avocado-label">{label}
    </label>
  )
};

export default Label;