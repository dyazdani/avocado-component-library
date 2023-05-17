import { useState} from 'react';
import React from 'react';
import { ThemeContext } from '../ThemeContext';

type themes = 'light' | 'dark'

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState<themes>('light');
    
    return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}