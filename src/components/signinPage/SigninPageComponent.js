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

const SignInGoogle = Loadable(() => import('./SignInGoogle'), {
  fallback: <IndefiniteLoading message="SignInGoogle" />,
});

const SigninPageComponent = ({ history, store }) => {
  const { sessionStore } = store;

  return (
    <Container maxWidth="sm">
      <Box mt={2} mb={1}>
        <Card variant="outlined">
          <CardHeader title="Sign In" />
          <CardContent>
            <SignInGoogle />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
export default inject('store')(observer(SigninPageComponent));
