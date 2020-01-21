import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

const IndefiniteLoading = props => {
  const { isCircular, message } = props;

  return (
    (isCircular && <div><CircularProgress />{message}</div>) || (
      <div><LinearProgress />{message}</div>
    )
  );

};

export default IndefiniteLoading;
