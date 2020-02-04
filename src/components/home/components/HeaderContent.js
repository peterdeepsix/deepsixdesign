import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { isWidthUp } from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const styles = ({
  spacing,
  transitions,
  breakpoints,
  palette,
  shape,
}) => ({
  header: {
    fontWeight: 600,
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

const HeaderContent = ({ classes, screen }) => {
  return (
    <>
      <Typography
        variant="h5"
        color="textSecondary"
        noWrap
        className={classes.header}
      >
        Deep Six Design
      </Typography>

      {isWidthUp('md', screen) && (
        <>
          <div className={classes.grow} />
          <Typography variant="h5" noWrap className={classes.header}>
            Deep Six Design
          </Typography>
          <Typography
            color={'textSecondary'}
            ariant="caption"
            display="block"
            noWrap
            className={classes.header}
          >
            Deep Six Design
          </Typography>
        </>
      )}
    </>
  );
};

export default withStyles(styles)(HeaderContent);
