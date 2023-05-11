import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Contexts";
import { CheckboxProps } from "../Checkbox/Checkbox";


const Label = ({label, id}: CheckboxProps) => {
  const theme = useContext(ThemeContext)
  return (
    <label
      htmlFor={id} className={theme} data-testid="avocado-label">{label}
    </label>
  )
};

export default Label;