import React from 'react';
import { inject, observer } from 'mobx-react';

import Avatar from '@material-ui/core/Avatar';

import Link from 'src/components/Link';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function AccountButton({ store }) {
  const classes = useStyles();
  const { sessionStore } = store;
  const { authUser } = sessionStore;
  if (authUser) {
    return (
      <>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          component={Link}
          to="/account"
        >
          <Avatar alt="User Photo" src={authUser.photoURL} />
          {authUser.displayName}
        </Button>
      </>
    );
  }
  return null;
}

export default inject('store')(observer(AccountButton));
