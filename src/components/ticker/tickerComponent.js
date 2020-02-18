import React from 'react';

import Ticker from 'react-ticker';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  chip: {
    marginRight: theme.spacing(1),
  },
}));

const TickerComponent = () => {
  const classes = useStyles();
  return (
    <>
      <Ticker>
        {({ index }) => (
          <>
            <Chip
              className={classes.chip}
              variant="outlined"
              label="Take Me There"
            />
          </>
        )}
      </Ticker>
    </>
  );
};

export default TickerComponent;
