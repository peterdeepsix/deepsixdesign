import Link from '../components/Link';
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
    flexGrow: 1,
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
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <AppBar color="inherit" position="static">
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
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
