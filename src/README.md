# Avocado Component Library

## A React component library inspired by the titular fruit.

### Description 
Controlled form components that you can use to create your very own Avocado-inspired forms in your React application. Supports a light and a dark theme using React context + Theme Provider.

### How to install
npm
```npm install avocado-component-library```

### Use AvocadoThemeProvider to Provide Light and Dark Themes

Wrap your highest level component using Avocado components in the AvocadoThemeProvider in order to provide the light and dark theme to that component and all its children. 

For example, if you had a top-level component called `<App />`:
```
import React from 'react';
import { AvocadoThemeContext } from '../AvocadoThemeContext';
import AvocadoBox from '../AvocadoBox';


export default function AvocadoThemeProvider({ theme }) {
    
    return (
    <AvocadoThemeContext.Provider value={theme}>
      <AvocadoBox>
        <App />
      </AvocadoBox>
    </AvocadoThemeContext.Provider>
  )
}
```
If you use AvocadoThemeProvider, descendant components won't not need to import `AvocadoThemeContext`.

### License

### Version






