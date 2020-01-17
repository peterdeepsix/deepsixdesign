import React from 'react';

import PredictionsTable from './predictionsTable';
import PredictionsDialog from './predictionsDialog';
import PredictionsForm from './predictionsForm';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const PredictionsComponent = () => {
  return (
    <Container>
      <Box>
        <PredictionsDialog />
      </Box>
      <Box>
        <PredictionsTable />
      </Box>
    </Container>
  );
};

export default PredictionsComponent;
