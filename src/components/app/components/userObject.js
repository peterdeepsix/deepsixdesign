import React from 'react';
import { inject, observer } from 'mobx-react';

import Typography from '@material-ui/core/Typography';

function UserObject({ store }) {
  const { sessionStore } = store;
  const { authUser } = sessionStore;
  if (authUser) {
    return (
      <Typography variant="caption" display="block">
        {authUser.displayName}
      </Typography>
    );
  }
  return null;
}

export default inject('store')(observer(UserObject));
