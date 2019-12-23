import Link from '../components/Link';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import AspectRatioOutlinedIcon from '@material-ui/icons/AspectRatioOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  leftButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
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
          component={Link}
          to="/objects"
          color="inherit"
          aria-label="objects"
        >
          <AspectRatioOutlinedIcon />
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
