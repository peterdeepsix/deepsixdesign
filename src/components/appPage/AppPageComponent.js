import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { inject, observer } from 'mobx-react';
import Loadable from '@loadable/component';

import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const ColorPickerComponent = Loadable(
  () => import('src/components/colorPicker/colorPickerComponent'),
  {
    fallback: <IndefiniteLoading message="ColorPickerComponent" />,
  },
);

const AppPageComponent = ({ history, store }) => {
  const { sessionStore } = store;
  const { auth, authUser, loggedIn, googleProvider } = sessionStore;

  const [isLoading, setIsLoading] = useState(true);
  const [isBusy, setIsBusy] = useState(false);

  const updateAuthUser = async user => {
    setIsBusy(true);
    await sessionStore.setAuthUser(user);
    setIsBusy(false);
  };

  const updateAuthToken = async token => {
    setIsBusy(true);
    await sessionStore.setAuthToken(token);
    setIsBusy(false);
  };

  const updateLoggedIn = async loggedIn => {
    setIsBusy(true);
    await sessionStore.setLoggedIn(loggedIn);
    setIsBusy(false);
  };

  const onSubmit = event => {
    if (!auth) return console.log('NO auth');
    let didCancel = false;

    const SignIn = async () => {
      await auth
        .signInWithPopup(googleProvider)
        .then(function(result) {
          const token = result.credential.accessToken;
          const user = result.user;
          if (user) {
            updateAuthUser(user);
            updateAuthToken(token);
            updateLoggedIn(true);
          }
          if (!didCancel) setIsLoading(false);
        })
        .catch(function(error) {
          const errorCode = error.code;
          console.log(`errorCode - ${errorCode}`);
          const errorMessage = error.message;
          console.log(`errorMessage - ${errorMessage}`);
          const email = error.email;
          console.log(`email - ${email}`);
          const credential = error.credential;
          console.log(`credential - ${credential}`);
        });
    };
    SignIn();
    return () => (didCancel = true);
    event.preventDefault();
  };

  const signOut = event => {
    if (!auth) return;
    let didCancel = false;

    const SignOut = async () => {
      await auth
        .signOut()
        .then(function() {
          sessionStore.setAuthUser(null);
          sessionStore.setAuthToken(null);
          sessionStore.setLoggedIn(null);
          if (!didCancel) setIsLoading(false);
        })
        .catch(function(error) {
          const { code, message, email, credential } = error;
          console.log(`errorCode - ${code}`);
          console.log(`errorMessage - ${message}`);
          console.log(`email - ${email}`);
          console.log(`credential - ${credential}`);
        });
    };
    SignOut();
    return () => (didCancel = true);
    event.preventDefault();
  };

  if (!loggedIn) {
    navigate(`/app/signin`);
    return (
      <Container maxWidth="sm">
        <Box mt={2} mb={1}>
          <Card variant="outlined">
            <CardHeader title="Account Details" />
            <CardContent>
              <Typography>
                These are the things that define you.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box mt={2} mb={1}>
          <Card variant="outlined">
            <CardHeader title="Account Actions" />
            <CardContent>
              <Typography>Change your patterns.</Typography>
              <Button variant="outlined" onClick={onSubmit}>
                Sign In
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    );
  }
};
export default inject('store')(observer(AppPageComponent));
