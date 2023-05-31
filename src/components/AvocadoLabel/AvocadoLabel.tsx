import React from "react";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";
import { AvocadoCheckboxProps } from "../AvocadoCheckbox/AvocadoCheckbox";


const AvocadoLabel = ({label, id}: AvocadoCheckboxProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
    <label
      htmlFor={id} className={`avocado-label ${theme}`} data-testid="avocado-label">{label}
    </label>
  )
};

export default AvocadoLabel;