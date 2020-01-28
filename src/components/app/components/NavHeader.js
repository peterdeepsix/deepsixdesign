import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { inject, observer } from 'mobx-react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

import Link from 'src/components/Link';
import UserObject from './userObject';

const useStyles = makeStyles((theme, collapsed) => ({
  root: {
    paddingTop: collapsed ? theme.spacing(1) : theme.spacing(2),
    paddingBottom: collapsed ? theme.spacing(1) : theme.spacing(1),
    paddingLeft: collapsed ? theme.spacing(1) : theme.spacing(2),
    paddingRight: collapsed ? theme.spacing(1) : theme.spacing(2),
    transition: '0.3s',
  },
  button: {
    marginBottom: theme.spacing(1),
  },
}));

const NavHeaderEx = ({ collapsed, history, store }) => {
  const classes = useStyles(collapsed);

  const { sessionStore } = store;
  const { auth, authUser, loggedIn, googleProvider } = sessionStore;

  return (
    <>
      <div className={classes.root}>
        {(!authUser && (
          <>
            <Box my={1}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={
                  <PersonAddOutlinedIcon
                    className={classes.extendedIcon}
                  />
                }
                className={classes.button}
                component={Link}
                to="/signin"
              >
                Sign In
              </Button>
            </Box>
            <Divider />
          </>
        )) || <UserObject />}
      </div>
    </>
  );
};

export default inject('store')(observer(NavHeaderEx));
