import React from 'react';
import { inject, observer } from 'mobx-react';

import NavBar from './components/navBar';
import BottomNav from './components/bottomNav';

const InterfaceLayoutComponent = ({ store, children, location }) => {
  return (
    <>
      {/* <NavBar /> */}
      <BottomNav location={location} />
      {children}
    </>
  );
};

export default inject('store')(observer(InterfaceLayoutComponent));
