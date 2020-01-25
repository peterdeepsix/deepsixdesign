
import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

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
    // const { auth, googleProvider } = sessionStore

    const [isLoading, setIsLoading] = useState(true)
    // const [error, setError] = useState(null)

    // const uiConfig = {
    //     signInFlow: 'popup',
    //     signInSuccessUrl: '/signedIn',
    //     signInOptions: [
    //     ]
    // };

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

    // const onSubmit = event => {
    //     firebase
    //         .signInWithPopup(googleProvider)
    //         .then(socialAuthUser => {
    //             return firebase.user(socialAuthUser.user.uid).set({
    //                 username: socialAuthUser.user.displayName,
    //                 email: socialAuthUser.user.email,
    //                 roles: {},
    //             });
    //         })
    //         .then(() => {
    //             setError(null)
    //             history.push('/about');
    //         })
    //         .catch(error => {
    //             if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
    //                 error.message = ERROR_MSG_ACCOUNT_EXISTS;
    //             }

    //             setError(error)
    //         });

    //     event.preventDefault();
    // };

    if (isLoading) return 'Loading objects...'
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                {/* <p>{error}</p>
                <Button variant='outlined' color='primary' onClick={onSubmit}>Sign In With Google</Button>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} /> */}
                <ul>
                    {objects.map(object => (
                        <p key={object.id}>{object.title}</p>
                    ))}
                </ul>
            </Box>
        </Container>
    );
}

export default inject('store')(observer(SignInComponent))