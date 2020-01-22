import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

import Link from 'src/components/Link';
import FirebaseObject from './firebaseObject';

const useStyles = makeStyles((theme, collapsed) => ({
  root: {
    paddingTop: collapsed ? theme.spacing(1) : theme.spacing(2),
    paddingBottom: collapsed ? theme.spacing(1) : theme.spacing(1),
    paddingLeft: collapsed ? theme.spacing(1) : theme.spacing(2),
    paddingRight: collapsed ? theme.spacing(1) : theme.spacing(2),
    transition: '0.3s'
  },
  button: {
    marginBottom: theme.spacing(1),
  },
}));

const NavHeaderEx = ({ collapsed }) => {
  const classes = useStyles(collapsed);
  return (
    <>
      <div className={classes.root}>
        <Box my={1}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            startIcon={<PersonAddOutlinedIcon className={classes.extendedIcon} />}
            className={classes.button}
            component={Link}
            to="/signin"
          >
            Sign In
      </Button>
        </Box>
        <Box my={1} >
          <Typography variant="subtitle2" noWrap>
            Anonymous User
          </Typography>
          <FirebaseObject />
        </Box>
      </div>
      <Divider />
    </>
  )
}

export default NavHeaderEx;
