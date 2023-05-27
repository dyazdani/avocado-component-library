import React from 'react';
import { ThemeContext } from '../ThemeContext';
import Box from '../Box';


export default function ThemeProvider({ children, theme}) {
    
    return (
    <ThemeContext.Provider value={theme}>
      <Box>
        {children}
      </Box>
    </ThemeContext.Provider>
  )
}