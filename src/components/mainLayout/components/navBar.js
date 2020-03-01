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
              aria-label="open drawer"
            >
              <ChangeHistoryOutlinedIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Deep Six Design
            </Typography>
            <div className={classes.grow} />
            <>
              <TextField
                disabled
                className={classes.searchButton}
                component={Button}
                onClick={handleClick}
                id="search"
                defaultValue="Search..."
                variant="outlined"
                size="small"
              />
              <Drawer anchor="top" open={open} onClose={handleClose}>
                <SearchComponent />
              </Drawer>
            </>
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
