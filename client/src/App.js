import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { history } from 'store';

import { renderRoutes, routes } from './lazy-routes';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        {renderRoutes(routes)}
      </Router>
    </ThemeProvider>
  );
}
export default App;
