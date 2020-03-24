import React from 'react';
import { inject, observer } from 'mobx-react';

const SessionLayoutComponent = ({ store, children }) => {
  const { sessionStore } = store;

  return <>{children}</>;
};

export default inject('store')(observer(SessionLayoutComponent));
