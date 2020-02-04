import React from 'react';
import NavBar from './components/navBar';

const HomeComponent = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default HomeComponent;
