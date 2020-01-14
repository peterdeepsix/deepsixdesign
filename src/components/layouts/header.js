import Link from '../Link';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
  },
  appBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
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
      <AppBar
        elevation={0}
        className={classes.appBar}
        position="fixed"
        color="inherit"
      >
        <Toolbar>
          <IconButton
            color="textSecondary"
            edge="start"
            className={classes.leftButton}
            component={Link}
            to="/"
            aria-label="index"
          >
            <ChangeHistoryIcon />
          </IconButton>
          <Typography
            color="textSecondary"
            variant="h6"
            className={classes.title}
          >
            {siteTitle}
          </Typography>
          <Button
            edge="end"
            variant="outlined"
            className={classes.rightButton}
            component={Link}
            to="/app"
            endIcon={<ExitToAppOutlinedIcon />}
            aria-label="app"
          >
            App
          </Button>
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
