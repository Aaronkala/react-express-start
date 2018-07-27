import React from 'react';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';
import theme from './styles/theme';
import './styles/globalStyles';

import Home from './pages/home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default hot(module)(App);
