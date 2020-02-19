import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import NavBreadCrumbs from './navBreadCrumbs';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#fff',
  },
  toolbar: {},
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })}
    </Slide>
  );
}

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const NavBar = props => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar color="inherit" className={classes.appBar}>
          <HideOnScroll {...props}>
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6">Deep Six Design</Typography>
            </Toolbar>
          </HideOnScroll>

          <Toolbar className={classes.toolbar}>
            <NavBreadCrumbs />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default NavBar;
