import type { Preview } from "@storybook/react";
import React from "react";
import '../src/index.css';
import ThemeProvider from "../src/components/ThemeProvider/ThemeProvider";
import { GlobalStyle } from "./GlobalStyle";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const globalTypes = {
    theme: {
    name: 'Theme',
    description: 'Global theme',
    defaultValue: 'light',
    toolbar: {
        icon: 'lightning',
        items: ['dark', 'light'],
        showName: true,
    },
},
};



export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme === 'light' ? 'light' : 'dark';
    return (
      <ThemeProvider theme={theme}>
        {/* Reset storybook paddings */}
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    );
  },
];

export default preview;
