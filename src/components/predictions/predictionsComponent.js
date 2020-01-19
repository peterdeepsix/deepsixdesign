import React from 'react';

import PredictionsTable from './predictionsTable';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
  },
}));

const PredictionsComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container>
        <Box>
          <PredictionsTable />
        </Box>
      </Container>
    </div>
  );
};

export default PredictionsComponent;
