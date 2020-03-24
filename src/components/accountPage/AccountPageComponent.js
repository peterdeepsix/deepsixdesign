import React, { useEffect, useState } from 'react';
import firebase from 'gatsby-plugin-firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
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

const ColorPickerComponent = Loadable(
  () => import('src/components/colorPicker/colorPickerComponent'),
  {
    fallback: <IndefiniteLoading message="ColorPickerComponent" />,
  },
);

const AcountPageComponent = ({ history, store }) => {
  const [user, initialising, error] = useAuthState(firebase.auth());

  const signOut = () => {
    firebase.auth().signOut();
  };
  if (initialising) {
    return (
      <>
        <Typography>Initialising User...</Typography>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Typography>Error: {error}</Typography>
      </>
    );
  }
  if (user) {
    return (
      <Container maxWidth="sm">
        <Box mt={2} mb={1}>
          <Card variant="outlined">
            <CardHeader title="Account Details" />
            <CardContent>
              <Typography>
                These are the things that define you.
              </Typography>
              <Typography>Current User: {user.email}</Typography>
              <Button variant="contained" onClick={signOut}>
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    );
  }
};
export default inject('store')(observer(AcountPageComponent));
