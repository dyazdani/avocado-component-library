import React from "react";
import { useContext } from "react";
import { AvocadoThemeContext } from "./AvocadoThemeContext";

const AvocadoBox = ({children}) => {
    const theme = useContext(AvocadoThemeContext)
    return (
      <div className={`avocado-box ${theme}`}>
        {children}
      </div>
    )
  }

  export default AvocadoBox;