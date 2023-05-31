import React from 'react';
import { AvocadoThemeContext } from '../AvocadoThemeContext';
import AvocadoBox from '../AvocadoBox';


export default function AvocadoThemeProvider({ children, theme}) {
    
    return (
    <AvocadoThemeContext.Provider value={theme}>
      <AvocadoBox>
        {children}
      </AvocadoBox>
    </AvocadoThemeContext.Provider>
  )
}