import { createTheme, responsiveFontSizes, Theme } from '@material-ui/core';
import { darkThemeOptions } from './darkThemeOptions';
import { lightThemeOptions } from './lightThemeOptions';

export function getDarkTheme(): Theme {
  let darkTheme = createTheme(darkThemeOptions);
  darkTheme = responsiveFontSizes(darkTheme);
  return darkTheme;
}

export function getLightTheme(): Theme {
  let lightTheme = createTheme(lightThemeOptions);
  lightTheme = responsiveFontSizes(lightTheme);
  return lightTheme;
}

export function getTheme(appTheme: string): Theme {
  const theme = appTheme === 'dark' ? getDarkTheme() : getLightTheme();
  return theme;
}
