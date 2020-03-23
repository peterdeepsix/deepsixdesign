import React, { useState } from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import SearchComponent from 'src/components/search/searchComponent';
import LinkComponent from 'src/components/link/LinkComponent';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {},
  grow: {
    flexGrow: 1,
  },
  // title: {
  //   display: 'none',
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'block',
  //   },
  // },
  searchbutton: {
    width: 300,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 340,
    },
  },
  autoComplete: {
    // borderColor: theme.palette.text.primary,
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

function Scroll(props) {
  const { children } = props;

  const trigger1 = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const trigger2 = useScrollTrigger({});

  return (
    <Slide appear={false} direction="down" in={!trigger2}>
      {React.cloneElement(children, {
        elevation: trigger1 ? 4 : 0,
      })}
    </Slide>
  );
}

const NavBar = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Scroll {...props}>
        <AppBar
          className={classes.appBar}
          positon="sticky"
          color="inherit"
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClick}
            >
              <SearchOutlinedIcon />
            </IconButton>
            <div className={classes.grow} />
            <Typography
              component={LinkComponent}
              to="/"
              className={classes.title}
              variant="h6"
              color="textPrimary"
              noWrap
            >
              Deep Six Design
            </Typography>
            <div className={classes.grow} />
            <IconButton
              component={LinkComponent}
              to="/app/account"
              edge="end"
              color="inherit"
            >
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Toolbar>
          <Drawer anchor="top" open={open} onClose={handleClose}>
            <SearchComponent handleClose={handleClose} />
          </Drawer>
        </AppBar>
      </Scroll>
      <Toolbar className={classes.toolbar}></Toolbar>
    </>
  );
};

export default NavBar;
