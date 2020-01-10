import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Loading = () => {
  const classes = useStyles();
  return <LinearProgress></LinearProgress>;
};

export default Loading;
