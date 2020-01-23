
import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';
import firebase from 'firebase';

const SignInComponent = ({ objects: objectsStore }) => {
    const [isLoading, setIsLoading] = useState(true)
    const { objects, firestore, auth } = objectsStore

    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/about',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
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

    if (isLoading) return <IndefiniteLoading message='SignInComponent' />
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <ul>
                    {objects.map(object => (
                        <p key={object.id}>{object.title}</p>
                    ))}
                </ul>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            </Box>
        </Container>
    );
}

export default inject('objects')(observer(SignInComponent))