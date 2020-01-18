import React, { useState } from 'react';
import { inject } from 'mobx-react';
import dateFormat from 'date-format';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const PredictionsTableItem = ({
  predictions: predictionsStore,
  prediction,
  handleMarkComplete,
}) => {
  const { title, status, dueAt } = prediction;
  const { firestore } = predictionsStore;

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box my={4}>
        <Typography variant="h6">
          Due {dateFormat('MM/dd/yyyy', new Date(dueAt))}
        </Typography>
      </Box>
      <Box my={4}>Status - {status}</Box>

      {status !== 'complete' && (
        <Box my={4}>
          <Button
            onClick={handleMarkComplete(prediction)}
            variant="outlined"
          >
            Toggle Status
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default inject('predictions')(PredictionsTableItem);
