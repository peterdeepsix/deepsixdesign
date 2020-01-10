import React from 'react';

import PredictionsTable from './predictionsTable';
import PredictionsForm from './predictionsForm';

import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';

const PredictionsComponent = () => {
  return (
    <Container>
      <PredictionsForm />
      <PredictionsTable />
    </Container>
  );
};

export default PredictionsComponent;
