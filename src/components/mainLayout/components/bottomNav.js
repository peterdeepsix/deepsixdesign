import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import { GiSolarTime } from 'react-icons/gi';
import { GiDuck } from 'react-icons/gi';
import { FaLuggageCart } from 'react-icons/fa';
import { IoIosContacts } from 'react-icons/Io';

import LinkComponent from 'src/components/link/linkComponent';
import ChipComponent from 'src/components/chip/chipComponent';

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
          swipe
          direction="right"
          value="/"
          label="Index"
          icon={<GiSolarTime />}
        />
        <BottomNavigationAction
          to="/contact"
          component={LinkComponent}
          swipe
          direction="up"
          value="/contact"
          label="Contact"
          icon={<IoIosContacts />}
        />
        <BottomNavigationAction
          to="/products"
          component={LinkComponent}
          swipe
          direction="down"
          value="/Products"
          label="Products"
          icon={<GiDuck />}
        />
        <BottomNavigationAction
          to="/cart"
          component={LinkComponent}
          swipe
          direction="left"
          value="/cart"
          label="Cart"
          icon={<FaLuggageCart />}
        />
      </BottomNavigation>
    </AppBar>
  );
};

export default BottomNav;
