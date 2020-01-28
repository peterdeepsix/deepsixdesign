import React, { Component } from 'react';
import { navigate } from 'gatsby';
import { isLoggedIn } from 'src/services/auth';
const PrivateRouteComponent = ({
  component: Component,
  location,
  ...rest
}) => {
  if (!isLoggedIn() && location.pathname !== `/login`) {
    navigate('/login');
    return null;
  }
  return <Component {...rest} />;
};
export default PrivateRouteComponent;
