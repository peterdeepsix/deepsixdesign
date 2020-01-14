import Link from '../Link';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LandscapeOutlinedIcon from '@material-ui/icons/LandscapeOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  offset: theme.mixins.toolbar,
}));

const Footer = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState();

  return (
    <React.Fragment>
      <div className={classes.offset} />
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          to="/gallery"
          aria-label="gallery"
          component={Link}
          label="Gallery"
          icon={<PermMediaOutlinedIcon />}
        />
        <BottomNavigationAction
          to="/products"
          aria-label="products"
          component={Link}
          label="Products"
          icon={<LandscapeOutlinedIcon />}
        />
        <BottomNavigationAction
          to="/cart"
          aria-label="cart"
          component={Link}
          label="Cart"
          icon={<ShoppingCartOutlinedIcon />}
        />
      </BottomNavigation>
    </React.Fragment>
  );
};

export default Footer;
