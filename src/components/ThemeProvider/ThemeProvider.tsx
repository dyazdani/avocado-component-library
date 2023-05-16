import { createContext, useState} from 'react';
import React from 'react';

const ThemeContext = createContext('light');

export default function ThemeProvider() {
    const [theme, setTheme] = useState('light');
    return (
    <ThemeContext.Provider value={theme}>
      
    </ThemeContext.Provider>
  )
}