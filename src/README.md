# Avocado Component Library 🥑

## A React component library for web-based projects.

### Description 
Includes light and dark themes, with a theme provider component for passing that theme to children.

### How to install
npm
```npm install avocado-component-library```

### Use AvocadoThemeProvider to Provide Light and Dark Themes to Children Components
Wrap your parent-most component in the AvocadoThemeProvider component to pass the theme to the parent-most component's children. An AvocadoBox component is provided for wrapping your parent-most component in a <div> element, if necessary, before wrapping that in AvocadoThemeProvider. 

For example, if your parent-most component was `<App />`:
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
NOTE: If you use AvocadoThemeProvider, descendant components do not need to import `AvocadoThemeContext.tsx` and thus do not need the import statement `import { AvocadoThemeContext } from "../AvocadoThemeContext";`

### Contributors
Dara Yazdani | dara.s.yazdani@gmail.com

### License
ISC

### Version
1.0.0





