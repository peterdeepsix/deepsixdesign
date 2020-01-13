import Link from '../Link';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
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
          to="/timeline"
          aria-label="timeline"
          component={Link}
          label="Timeline"
          icon={<NaturePeopleOutlinedIcon />}
        />
        <BottomNavigationAction
          to="/camera"
          aria-label="camera"
          component={Link}
          label="Camera"
          icon={<AddAPhotoOutlinedIcon />}
          PermMediaOutlinedIcon
        />
        <BottomNavigationAction
          to="/media"
          aria-label="media"
          component={Link}
          label="Media"
          icon={<CloudUploadOutlinedIcon />}
        />
        <BottomNavigationAction
          to="/predictions"
          aria-label="predictions"
          component={Link}
          label="Predictions"
          icon={<LandscapeOutlinedIcon />}
        />
      </BottomNavigation>
    </React.Fragment>
  );
};

export default Footer;
