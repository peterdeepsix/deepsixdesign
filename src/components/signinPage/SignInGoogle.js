import React, { useState, useEffect } from 'react';
import firebase from 'gatsby-plugin-firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  useDocument,
  useCollection,
} from 'react-firebase-hooks/firestore';
import { inject, observer } from 'mobx-react';
import { navigate } from 'gatsby';

import { Button, Typography } from '@material-ui/core';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const SignInGoogle = ({ history, store }) => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const signIn = () => {
    firebase.auth().signInWithPopup(googleProvider);
  };

  if (loading) {
    return <IndefiniteLoading message="Initialising User" />;
  }
  if (error) {
    return (
      <>
        <Typography>Error: {error}</Typography>
      </>
    );
  }
  if (user) {
    navigate(`/app/account`);
  }
  return (
    <Button color="primary" variant="contained" onClick={signIn}>
      Sign In With Google
    </Button>
  );
};

export default inject('store')(observer(SignInGoogle));
