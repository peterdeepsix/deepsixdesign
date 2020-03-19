import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AppBar from '@material-ui/core/AppBar';
import { GiSolarTime } from 'react-icons/gi';
import { GiDuck } from 'react-icons/gi';
import { FaLuggageCart } from 'react-icons/fa';
import { IoIosContacts } from 'react-icons/Io';

import LinkComponent from 'src/components/link/linkComponent';

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    top: 'auto',
    bottom: 0,
  },
});

const BottomNav = ({ location }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('/');

  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  return (
    <AppBar
      position="fixed"
      color="primary"
      className={classes.stickToBottom}
      elevation={4}
    >
      <BottomNavigation
        value={value}
        fullWidth
        aria-label="BottomNavigation label"
        showLabels
      >
        <BottomNavigationAction
          to="/"
          component={LinkComponent}
          fade
          duration={0.5}
          bg="#fff"
          value="/"
          label="Index"
          icon={<GiSolarTime />}
        />
        <BottomNavigationAction
          to="/contact"
          component={LinkComponent}
          cover
          duration={0.5}
          bg="#fff"
          value="/contact"
          label="Contact"
          icon={<IoIosContacts />}
        />
        <BottomNavigationAction
          to="/products"
          component={LinkComponent}
          paintDrip
          duration={0.5}
          hex="#fff"
          value="/Products"
          label="Products"
          icon={<GiDuck />}
        />
        <BottomNavigationAction
          to="/cart"
          component={LinkComponent}
          swipe
          duration={0.5}
          direction="left"
          top="entry"
          entryOffset={80}
          bg="#fff"
          value="/cart"
          label="Cart"
          icon={<FaLuggageCart />}
        />
      </BottomNavigation>
    </AppBar>
  );
};

export default BottomNav;
