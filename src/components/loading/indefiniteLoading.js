import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

const IndefiniteLoading = props => {
  const { isCircular, loading } = props;
  // REMOVE NEGATION LATER
  {
    if (!loading)
      return (
        (isCircular && <CircularProgress></CircularProgress>) || (
          <LinearProgress></LinearProgress>
        )
      );
    return null;
  }
};

export default IndefiniteLoading;
