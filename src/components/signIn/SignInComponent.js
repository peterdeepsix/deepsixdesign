
import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const SignInComponent = ({ objects: objectsStore }) => {
    const [isLoading, setIsLoading] = useState(true)
    const { objects, firestore } = objectsStore

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

    if (isLoading) return (
        <Container maxWidth="sm">
            <Box my={4}>
                Sign In - isLoading
            {console.log(objects)}
            </Box>
        </Container>
    );
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                Sign In - Objects
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

export default inject('objects')(observer(SignInComponent))