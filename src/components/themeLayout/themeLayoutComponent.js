import React, { useMemo } from 'react';
import { inject, observer } from 'mobx-react';
import { Helmet } from 'react-helmet';

import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';

const MainLayoutComponent = ({ store, children }) => {
  const { themeStore } = store;
  const { themeObject } = themeStore;

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

export default inject('store')(observer(MainLayoutComponent));
