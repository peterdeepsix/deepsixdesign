import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import { GiSolarTime } from 'react-icons/gi';
import { GiDuck } from 'react-icons/gi';
import { FaLuggageCart } from 'react-icons/fa';

import LinkComponent from 'src/components/link/linkComponent';
import ChipComponent from 'src/components/chip/chipComponent';

const useStyles = makeStyles({
  stickToBottom: {
    flexGrow: 1,
    maxWidth: 500,
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

const BottomNav = ({ location }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
    console.log(`LOCATION - PATHNAME - ${location.pathname}`);
  }, [location]);

  return (
    <>
      <Paper
        elevation={4}
        // variant="outlined"
        className={classes.stickToBottom}
      >
        <Tabs
          value={value}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="tabs label"
        >
          <Tab
            icon={<GiSolarTime />}
            label="Index"
            to="/"
            component={LinkComponent}
            value="/"
          />
          <Tab
            icon={
              <ChipComponent
                to="/products"
                letter="P"
                label="Raw"
                icon={<GiDuck />}
                isSelected={value === '/products' && true}
              />
            }
            component={LinkComponent}
            value="/products"
          />
          <Tab
            icon={
              <ChipComponent
                to="/cart"
                letter="C"
                label="Art"
                icon={<FaLuggageCart />}
                variant="outline"
                isSelected={value === '/cart' && true}
              />
            }
            component={LinkComponent}
            value="/cart"
          />
        </Tabs>
      </Paper>
    </>
  );
};

export default BottomNav;
