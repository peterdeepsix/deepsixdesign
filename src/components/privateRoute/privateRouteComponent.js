import React from 'react';
import { inject, observer } from 'mobx-react';
import { navigate } from 'gatsby';
import firebase from 'gatsby-plugin-firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivateRouteComponent = ({
  store,
  component: Component,
  location,
  ...rest
}) => {
  const [user, initialising, error] = useAuthState(firebase.auth());

  if (!user) {
    console.log('Not Logged In - Redirect to /app/signin');
    navigate('/app/signin');
    return null;
  }
  return <Component {...rest} />;
};
export default inject('store')(observer(PrivateRouteComponent));
