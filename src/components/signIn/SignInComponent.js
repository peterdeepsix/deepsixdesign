
import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const SignInComponent = ({ history, objectsStore, sessionStore }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const { objects, firestore } = objectsStore
    const { auth, googleProvider } = sessionStore

    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/signedIn',
        signInOptions: [
            googleProvider.PROVIDER_ID,
        ]
    };

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
        console.log(auth)
    };



    if (isLoading) return 'Loading objects...'
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Button variant='outlined' color='primary' onClick={onSubmit}>Sign In With Google</Button>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                <ul>
                    {objects.map(object => (
                        <p key={object.id}>{object.title}</p>
                    ))}
                </ul>
            </Box>
        </Container>
    );
}

export default inject('objectsStore', 'sessionStore')(observer(SignInComponent))