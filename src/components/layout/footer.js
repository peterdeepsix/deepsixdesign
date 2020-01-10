import Link from '../Link';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import LandscapeOutlinedIcon from '@material-ui/icons/LandscapeOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
}));

const Footer = ({ siteTitle }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        to="/about"
        aria-label="about"
        component={Link}
        label="About"
        icon={<NaturePeopleOutlinedIcon />}
      />
      <BottomNavigationAction
        to="/upload"
        aria-label="upload"
        component={Link}
        label="Upload"
        icon={<CloudUploadOutlinedIcon />}
      />
      <BottomNavigationAction
        to="/media"
        aria-label="media"
        component={Link}
        label="Media"
        icon={<PermMediaOutlinedIcon />}
      />
      <BottomNavigationAction
        to="/predictions"
        aria-label="predictions"
        component={Link}
        label="Predictions"
        icon={<LandscapeOutlinedIcon />}
      />
    </BottomNavigation>
  );
};

export default Footer;
