import React from 'react';
import NavBar from './components/navBar';
import BottomNav from './components/bottomNav';
import CssBaseline from '@material-ui/core/CssBaseline';
const MainLayoutComponent = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      {children}
      <BottomNav />
    </>
  );
};

export default MainLayoutComponent;
