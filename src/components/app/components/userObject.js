import React from 'react';
import { inject, observer } from 'mobx-react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import List from '@material-ui/core/ListItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

import LinkComponent from 'src/components/link/linkComponent';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
}));

function UserObject({ store }) {
  const classes = useStyles();
  const { sessionStore } = store;
  const { authUser } = sessionStore;
  if (authUser) {
    return (
      <div className={classes.root}>
        <List disableGutters>
          <ListItem
            button
            color="inherit"
            component={LinkComponent}
            to="/account"
          >
            <ListItemAvatar>
              <Avatar alt="User Photo" src={authUser.photoURL} />
            </ListItemAvatar>
            <ListItemText
              primary={authUser.displayName}
              primaryTypographyProps={{ noWrap: true }}
              secondary={authUser.email}
              secondaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
        </List>
      </div>
    );
  }
  return null;
}

export default inject('store')(observer(UserObject));
