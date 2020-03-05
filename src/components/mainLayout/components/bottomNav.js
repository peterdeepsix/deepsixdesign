import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';

import LinkComponent from 'src/components/link/linkComponent';

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.stickToBottom}
    >
      <BottomNavigationAction
        label="About"
        icon={<NaturePeopleOutlinedIcon />}
        to="/"
        component={LinkComponent}
      />
      <BottomNavigationAction
        label="Products"
        icon={<PermMediaOutlinedIcon />}
        to="/products"
        component={LinkComponent}
      />
      <BottomNavigationAction
        label="Cart"
        icon={<ShoppingCartOutlinedIcon />}
        to="/cart"
        component={LinkComponent}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
