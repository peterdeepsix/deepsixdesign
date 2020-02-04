import React from 'react';
import NavBar from './components/navBar';

const HomeComponent = ({ children }) => {
  return (
    <>
      {children}
      <NavBar />
    </>
  );
};

export default HomeComponent;
