import React from 'react';
import NavBar from './components/navBar';

const MainLayoutComponent = ({ children }) => {
  return (
    <>
      {children}
      <NavBar />
    </>
  );
};

export default MainLayoutComponent;
