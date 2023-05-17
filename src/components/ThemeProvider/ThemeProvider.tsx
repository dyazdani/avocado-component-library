import { createContext, useState} from 'react';
import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

const ThemeContext = createContext('light');

interface ThemeProviderProps {
    label: string
}

export default function ThemeProvider({ label }: ThemeProviderProps) {
    const [theme, setTheme] = useState<string>('light');
    return (
    <ThemeContext.Provider value={theme}>
      <Checkbox 
      label={label}/>
    </ThemeContext.Provider>
  )
}