
import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
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
    const { objectsStore, sessionStore } = store
    const { objects, firestore } = objectsStore
    const { auth, authUser, googleProvider } = sessionStore

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [isBusy, setIsBusy] = useState(false)

    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/signedIn',
        signInOptions: [
            googleProvider.PROVIDER_ID,
        ]
    };

    const updateUser = async (displayName) => {
        setIsBusy(true)
        await sessionStore.setAuthUser(displayName)
        setIsBusy(false)
    }

    useEffect(() => {
        if (!firestore) return
        let didCancel = false

        const getObjects = async () => {
            await objectsStore.getObjects()
            if (!didCancel) setIsLoading(false)
        }
        getObjects()
        return () => (didCancel = true)
    }, [firestore])

    const onSubmit = event => {
        if (!auth) return
        let didCancel = false

        const SignIn = async () => {
            await auth.signInWithPopup(googleProvider).then(function (result) {
                const token = result.credential.accessToken;
                const user = result.user;
                console.log('setAuthUser')
                console.log(user.displayName)
                if (user) { updateUser(user.displayName) }

            }).catch(function (error) {
                const errorCode = error.code;
                console.log(`errorCode - ${errorCode}`)
                const errorMessage = error.message;
                console.log(`errorMessage - ${errorMessage}`)
                const email = error.email;
                console.log(`email - ${email}`)
                const credential = error.credential;
                console.log(`credential - ${credential}`)
            });
            if (!didCancel) setIsLoading(false)
        }
        SignIn()
        return () => (didCancel = true)
        event.preventDefault();
    };

    if (isLoading) return 'Loading objects...'
    return (
        <Container maxWidth="sm">
            <Box my={4}>

                <Button variant='outlined' color='primary' onClick={onSubmit}>Sign In With Google</Button>
                <p>{error}</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            </Box>
        </Container>
    );
}

export default inject('store')(observer(SignInComponent))