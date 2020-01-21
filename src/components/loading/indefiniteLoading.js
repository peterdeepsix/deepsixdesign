import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const IndefiniteLoading = props => {
  const { isCircular, message } = props;

  return (
    (isCircular && <div><CircularProgress />{message}</div>) || (
      <div><LinearProgress /><Typography variant="caption" display="block" gutterBottom>
        {message}
      </Typography></div>
    )
  );

};

export default IndefiniteLoading;
