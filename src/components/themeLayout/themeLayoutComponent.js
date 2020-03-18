import React, { useMemo } from 'react';
import { inject, observer } from 'mobx-react';
import { Helmet } from 'react-helmet';

import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const ThemeLayoutComponent = ({ store, children }) => {
  const { themeStore } = store;
  const { color, isDark, themeObject } = themeStore;

  const prefersDarkMode = useMediaQuery(
    '(prefers-color-scheme: dark)',
  );

  useMemo(() => {
    themeStore.getIsDark();
    themeStore.getThemeObject();
  }, [themeStore]);

  useMemo(() => {
    themeStore.setIsDark(prefersDarkMode);
  }, [prefersDarkMode]);

  useMemo(() => {
    themeStore.setThemeObject(
      createMuiTheme({
        palette: {
          type: isDark ? 'dark' : 'light',
          primary: {
            main: color,
          },
          secondary: {
            main: color,
          },
          error: {
            main: color,
          },
        },
        typography: {
          button: {
            textTransform: 'none',
          },
          overline: {
            textTransform: 'none',
          },
          fontFamily: [
            'Muli',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
      }),
    );
  }, [color, isDark, prefersDarkMode]);

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Muli:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={themeObject}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default inject('store')(observer(ThemeLayoutComponent));
