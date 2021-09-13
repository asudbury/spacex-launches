import { ThemeOptions } from '@material-ui/core/styles/createTheme';

// eslint-disable-next-line import/prefer-default-export
export const lightThemeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#12dcff',
      dark: '#17764a',
      light: '#75ff96',
      contrastText: '#1c1c1c'
    },
    secondary: {
      main: '#12dcff',
      dark: '#003332'
    },
    text: {
      secondary: '#b7b7b7',
      disabled: '#414348',
      hint: '#b7b7b7'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    button: {
      textTransform: 'none'
    }
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#161617',
        color: '#ffff'
      }
    },
    MuiButton: {
      root: {
        borderRadius: '2em'
      }
    },
    MuiTabs: {
      indicator: {
        height: '0.3em'
      }
    },
    MuiTab: {
      wrapper: {
        flexDirection: 'row'
      },
      root: {
        backgroundColor: '#161617',
        color: '#0000000'
      }
    },
    MuiSvgIcon: {
      root: {
        width: '1.3em'
      }
    },
    MuiCard: {
      root: {
        borderRadius: '0.8em',
        backgroundColor: '#fafafa'
      }
    }
  }
};
