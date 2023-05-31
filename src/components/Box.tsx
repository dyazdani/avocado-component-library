import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = ({children}) => {
    const theme = useContext(ThemeContext)
    return (
      <div className={`avocado-box ${theme}`}>
        {children}
      </div>
    )
  }

  export default Box;