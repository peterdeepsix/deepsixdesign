import Link from '../Link';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
  },
  leftButton: {
    marginRight: theme.spacing(2),
  },
  rightButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.leftButton}
            component={Link}
            to="/"
            color="inherit"
            aria-label="index"
          >
            <ChangeHistoryIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {siteTitle}
          </Typography>
          <IconButton
            edge="end"
            className={classes.rightButton}
            component={Link}
            to="/"
            color="inherit"
            aria-label="index"
          >
            <SearchOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
