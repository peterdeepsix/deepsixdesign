import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  useDocument,
  useCollection,
} from 'react-firebase-hooks/firestore';
import firebase from 'gatsby-plugin-firebase';
import { inject, observer } from 'mobx-react';
import Peer from 'peerjs';

import { makeStyles } from '@material-ui/core/styles';
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
import DuoOutlinedIcon from '@material-ui/icons/DuoOutlined';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const UserList = ({ store, callUser }) => {
  const classes = useStyles();

  const [users, usersLoading] = useCollection(
    firebase.firestore().collection('users'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  return (
    <>
      {usersLoading && (
        <IndefiniteLoading message="UsersCollection" />
      )}
      {users && (
        <List className={classes.root}>
          {users.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return (
              <ListItem
                key={doc.id}
                button
                onClick={() => callUser(id)}
              >
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText
                  id={doc.id}
                  primary={doc.data().displayName}
                  secondary={doc.id}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    color={
                      (doc.data().online && 'primary') || 'inherit'
                    }
                    edge="end"
                    aria-label="comments"
                  >
                    <DuoOutlinedIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};
export default inject('store')(observer(UserList));
