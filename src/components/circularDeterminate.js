import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {},
}));

export default function CircularDeterminate(props) {
  const classes = useStyles();
  const { progress, loading } = props;

  return (
    <div className={classes.root}>
      {` `}
      {loading && <CircularProgress value={progress} size={14} />}
    </div>
  );
}
