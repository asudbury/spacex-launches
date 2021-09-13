/* eslint-disable react/jsx-no-bind */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  AppBar,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './routes';
import { getTheme } from './themes/themeManager';

function App(): JSX.Element {
  /// can also be light theme!
  const theme = getTheme('dark');

  function handleMenuHome() {
    window.location.href = process.env.PUBLIC_URL;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="end"
                color="secondary"
                aria-label="home page"
                onClick={handleMenuHome}
              >
                <HomeIcon fontSize="small" />
              </IconButton>
              <Typography variant="caption">SpaceX Launches</Typography>
            </Toolbar>
          </AppBar>
          <Routes />
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
