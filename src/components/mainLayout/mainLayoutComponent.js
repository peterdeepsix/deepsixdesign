import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from './components/navBar';
import BottomNav from './components/bottomNav';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'src/configs/theme';
const MainLayoutComponent = ({ children, location }) => {
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <BottomNav location={location} />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainLayoutComponent;
