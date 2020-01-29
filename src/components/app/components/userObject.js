import React from 'react';
import { inject, observer } from 'mobx-react';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Link from 'src/components/Link';

function UserObject({ store }) {
  const { sessionStore } = store;
  const { authUser } = sessionStore;
  if (authUser) {
    return (
      <>
        <List>
          <ListItem
            color="inherit"
            button
            component={Link}
            to="/account"
          >
            <Avatar alt="User Photo" src={authUser.photoURL} />
            <ListItemText
              primary={authUser.displayName}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
        </List>
      </>
    );
  }
  return null;
}

export default inject('store')(observer(UserObject));
