import React, { useEffect, useState } from 'react';
import firebase from 'gatsby-plugin-firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  useDocument,
  useCollection,
} from 'react-firebase-hooks/firestore';
import { inject, observer } from 'mobx-react';
import Loadable from '@loadable/component';

import Peer from 'peerjs';

import { makeStyles } from '@material-ui/core/styles';
import DuoOutlinedIcon from '@material-ui/icons/DuoOutlined';

import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const WebRTC = Loadable(() => import('./WebRTC'), {
  fallback: <IndefiniteLoading message="WebRTC" />,
});

const UserList = Loadable(() => import('./UserList'), {
  fallback: <IndefiniteLoading message="UserList" />,
});

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const AcountPageComponent = ({ history, store }) => {
  const classes = useStyles();

  const [user, initialising, error] = useAuthState(firebase.auth());

  const [users, usersLoading] = useCollection(
    firebase.firestore().collection('users'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  const [userDoc, userDocLoading, userDocError] = useDocument(
    firebase.firestore().doc(`/users/${user.uid}`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  const simulateOnline = () => {
    userDoc.ref.set(
      {
        online: true,
      },
      { merge: true },
    );
  };

  const enableTracking = () => {
    userDoc.ref.set(
      {
        displayName: user.displayName,
        online: true,
      },
      { merge: true },
    );
  };

  const disableTracking = () => {
    userDoc.ref.delete();
    console.log(userDoc.ref);
  };

  const simulateOffline = () => {
    userDoc.ref.set(
      {
        online: false,
      },
      { merge: true },
    );
  };

  const signOut = () => {
    firebase.auth().signOut();
  };

  if (initialising) {
    return <IndefiniteLoading message="Initialising User" />;
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
            <CardHeader title="Web RTC" />
            <WebRTC />
          </Card>
        </Box>
        <Box mt={2} mb={1}>
          <Card variant="outlined">
            <CardHeader title="Account Details" />
            <CardContent>
              <Box mt={1} mb={1}>
                <Avatar
                  className={classes.avatar}
                  src={user.photoURL}
                />
              </Box>
              <Box mt={2} mb={1}>
                <Typography>User ID: {user.uid}</Typography>
              </Box>
              <Box mt={1} mb={1}>
                <Typography>
                  Display Name: {user.displayName}
                </Typography>
              </Box>
              <Box mt={1} mb={1}>
                <Typography>Email: {user.email}</Typography>
              </Box>
              <Box mt={1} mb={1}>
                <Typography>
                  Anonymous User:{' '}
                  {(user.isAnonymous && 'Yes') || 'No'}
                </Typography>
              </Box>
              <Box mt={1} mb={1}>
                <Typography>User Status: Online</Typography>
              </Box>
              <Box mt={1} mb={1}>
                <Button variant="outlined" onClick={signOut}>
                  Sign Out
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box mt={2} mb={10}>
          <Card variant="outlined">
            <CardHeader title="Account Actions" />
            <CardContent>
              <Box mt={2} mb={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={enableTracking}
                >
                  Enable WebRTC
                </Button>
              </Box>
              <Box mt={2} mb={1}>
                <Button variant="outlined" onClick={disableTracking}>
                  Disable WebRTC
                </Button>
              </Box>
              <Box mt={2} mb={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={simulateOnline}
                >
                  Simulate Online
                </Button>
              </Box>
              <Box mt={2} mb={1}>
                <Button variant="outlined" onClick={simulateOffline}>
                  Simulate Disconnect
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    );
  }
};
export default inject('store')(observer(AcountPageComponent));
