import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { navigate } from 'gatsby';

const PrivateRouteComponent = ({
  store,
  component: Component,
  location,
  ...rest
}) => {
  const { sessionStore } = store;
  const { authUser } = sessionStore;
  console.log(authUser);
  if (!authUser && location.pathname !== `/signin`) {
    navigate('/signin');
    return null;
  }
  return <Component {...rest} />;
};
export default inject('store')(observer(PrivateRouteComponent));
