import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { navigate } from 'gatsby';

const PrivateRouteComponent = ({
  store,
  component: Component,
  location,
  ...rest
}) => {
  const { authUser } = store.sessionStore;

  if (!authUser) {
    navigate('/app/signin');
    return null;
  }
  return <Component {...rest} />;
};
export default inject('store')(observer(PrivateRouteComponent));
