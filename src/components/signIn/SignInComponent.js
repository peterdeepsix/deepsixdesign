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
  const { currentUser } = auth;

  const [isLoading, setIsLoading] = useState(true);
  const [isBusy, setIsBusy] = useState(false);

  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/signedIn',
    signInOptions: [googleProvider.PROVIDER_ID],
  };

  const updateUser = async () => {
    setIsBusy(true);
    await sessionStore.setAuthUser();
    await sessionStore.setLoggedIn(true);
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
          console.log('setAuthUser');
          console.log(user.displayName);
          if (user) {
            updateUser();
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
  if (loggedIn) {
    navigate(`/about`);
  }
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Button variant="outlined" color="primary" onClick={onSubmit}>
          Sign In With Google
        </Button>
        {currentUser && (
          <div>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={auth}
            />
            <p>{currentUser.displayName}</p>
          </div>
        )}
      </Box>
    </Container>
  );
};

export default inject('store')(observer(SignInComponent));
