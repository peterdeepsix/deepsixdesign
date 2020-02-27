import React from 'react';
import NavBar from './components/navBar';
import CssBaseline from '@material-ui/core/CssBaseline';
const MainLayoutComponent = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      {children}
    </>
  );
};

export default MainLayoutComponent;
