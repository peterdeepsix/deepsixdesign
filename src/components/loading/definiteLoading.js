import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

const DefiniteLoading = props => {
  const { isCircular, progress, loading } = props;
  {
    return (
      (isCircular && (
        <CircularProgress
          variant="determinate"
          progress={progress}
          loading={loading}
        ></CircularProgress>
      )) || (
        <LinearProgress
          variant="determinate"
          progress={progress}
          loading={loading}
        ></LinearProgress>
      )
    );
  }
};

export default DefiniteLoading;
