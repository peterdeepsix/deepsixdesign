import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = props => {
  const { isCircular } = props;
  if (isCircular) return <CircularProgress></CircularProgress>;
  return <LinearProgress></LinearProgress>;
};

export default Loading;
