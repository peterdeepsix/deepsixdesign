import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

const IndefiniteLoading = props => {
  const { isCircular, loading } = props;
  {
    return (
      (isCircular && (
        <CircularProgress loading={loading}></CircularProgress>
      )) || (
        <LinearProgress size={14} loading={loading}></LinearProgress>
      )
    );
  }
};

export default IndefiniteLoading;
