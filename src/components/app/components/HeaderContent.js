import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { isWidthUp } from '@material-ui/core/withWidth';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Search from '@material-ui/icons/Search';
import MoreVert from '@material-ui/icons/MoreVert';
import Favorite from '@material-ui/icons/Favorite';
import Phone from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import Camera from '@material-ui/icons/Camera';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import Link from '../../Link';

const styles = ({
  spacing,
  transitions,
  breakpoints,
  palette,
  shape,
}) => ({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18,
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    marginRight: 8,
    borderRadius: shape.borderRadius,
    background: palette.grey[200],
    '&:hover': {
      background: palette.grey[300],
    },
    marginLeft: 0,
    width: '100%',
    [breakpoints.up('sm')]: {
      marginLeft: spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    borderRadius: 4,
    paddingTop: spacing(1),
    paddingRight: spacing(1),
    paddingBottom: spacing(1),
    paddingLeft: spacing(10),
    transition: transitions.create('width'),
    width: '100%',
    [breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

const HeaderContent = ({ classes, screen }) => (
  <>
    <Typography
      noWrap
      color={'textSecondary'}
      className={classes.header}
    >
      Plexus Prediction Engine v1.0.0
    </Typography>
    <div className={classes.grow} />

    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <Search />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
    <Button
      edge="end"
      variant="outlined"
      component={Link}
      to="/"
      endIcon={<ExitToAppOutlinedIcon />}
      aria-label="index"
    >
      D6d
    </Button>
    {screen === 'xs' && (
      <IconButton>
        <MoreVert />
      </IconButton>
    )}
    {screen === 'sm' && (
      <>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </>
    )}
    {isWidthUp('md', screen) && (
      <>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Phone />
        </IconButton>
        <IconButton>
          <Camera />
        </IconButton>
      </>
    )}
  </>
);

export default withStyles(styles)(HeaderContent);
