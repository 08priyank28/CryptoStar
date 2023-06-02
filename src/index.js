import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';
import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </StrictMode>
);


export const server = `https://api.coingecko.com/api/v3`;
