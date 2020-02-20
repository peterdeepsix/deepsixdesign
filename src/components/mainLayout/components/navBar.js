import React, { useState } from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ChangeHistoryOutlinedIcon from '@material-ui/icons/ChangeHistoryOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import SearchComponent from 'src/components/search/searchComponent';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {},
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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
      width: 240,
    },
  },
  autoComplete: {
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

  return (
    <>
      <Scroll {...props}>
        <AppBar
          positon="sticky"
          color="inherit"
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <ChangeHistoryOutlinedIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Deep Six Design
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <SearchComponent />
            </div>
            <IconButton color="inherit">
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <IconButton edge="end" color="inherit">
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Scroll>
      <Toolbar className={classes.toolbar}></Toolbar>
    </>
  );
};

export default NavBar;
