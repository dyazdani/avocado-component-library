import React, {ChangeEvent} from "react";
import AvocadoLabel from "../AvocadoLabel/AvocadoLabel";
import { useContext } from "react";
import { AvocadoThemeContext } from "../AvocadoThemeContext";

export interface AvocadoTextFieldProps {
  id: string
  name: string
  label: string
  value: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const AvocadoTextInput = ({id, value, name, placeholder, onChange}: AvocadoTextFieldProps ) => {
  const theme = useContext(AvocadoThemeContext)

  return (
          <input
            className={`avocado-text-input ${theme}`}
            type="text"
            data-testid="avocado-text-input"
            placeholder={placeholder}
            id={id}
            value={value}
            onChange={onChange}
            name={name}
          />
        )
};

const AvocadoTextField = ({id, name, label, placeholder, value, onChange}: AvocadoTextFieldProps) => {
  const theme = useContext(AvocadoThemeContext)
  return (
      <div data-testid="avocado-text-field" className={`avocado-text-field ${theme}`}>
        <AvocadoTextInput
          name={name} 
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <AvocadoLabel id={id} label={label}/>
      </div>
  )
};

export default AvocadoTextField;