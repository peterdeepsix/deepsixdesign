import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const SignInComponent = () => {
    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/about',
        signInOptions: [
            // auth.GoogleAuthProvider.PROVIDER_ID,
        ]
    };

    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <StyledFirebaseAuth uiConfig={uiConfig} />
            </Box>
        </Container>
    );
}

export default SignInComponent