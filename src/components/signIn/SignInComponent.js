
import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const SignInComponent = ({ history, objectsStore, sessionStore }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const { objects, firestore } = objectsStore
    const { auth, authUser } = sessionStore

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
        auth.doSignInWithGoogle()
            .then(socialAuthUser => {
                return auth.user(socialAuthUser.user.uid).set({
                    username: socialAuthUser.user.displayName,
                    email: socialAuthUser.user.email,
                    roles: {},
                });
            })
            .then(() => {
                setError(null)
                history.push('/about');
            })
            .catch(error => {
                if (error.code === 'ERROR_MSG_ACCOUNT_EXISTS') {
                    error.message = 'ERROR_MSG_ACCOUNT_EXISTS';
                }

                setError(error)
            });

        event.preventDefault();
    };

    if (isLoading) return 'Loading objects...'
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Button variant='outlined' color='primary' onClick={onSubmit}>Sign In With Google</Button>
                {console.log(objects)}
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