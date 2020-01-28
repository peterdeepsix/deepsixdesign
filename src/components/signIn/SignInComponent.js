import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { inject, observer } from 'mobx-react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

const SignInComponent = ({ history, store }) => {
  const { sessionStore } = store;
  const { auth, authUser, loggedIn, googleProvider } = sessionStore;

  const [isLoading, setIsLoading] = useState(true);
  const [isBusy, setIsBusy] = useState(false);

  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/signedIn',
    signInOptions: [googleProvider.PROVIDER_ID],
  };

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
    if (!auth) return;
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

  if (loggedIn) {
    // navigate(`/about`);
  }
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Button variant="outlined" color="primary" onClick={onSubmit}>
          Sign In With Google
        </Button>
        <Button variant="outlined" onClick={signOut}>
          Sign Out
        </Button>
        {authUser && (
          <div>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={auth}
            />
            <p>{authUser.displayName}</p>
          </div>
        )}
      </Box>
    </Container>
  );
};

export default inject('store')(observer(SignInComponent));
