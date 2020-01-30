import React from 'react';
import dateFormat from 'date-format';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const PredictionsTableItem = ({ rowData, handleMarkComplete }) => {
  const { title, status, dueAt, createdAt, inputImageUrl } = rowData;

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box my={4}>
        <Typography variant="body1">
          Created {dateFormat('MM/dd/yyyy', new Date(createdAt))}
        </Typography>
      </Box>
      <Box my={4}>
        <Typography variant="body1">
          Due {dateFormat('MM/dd/yyyy', new Date(dueAt))}
        </Typography>
      </Box>
      <Box my={4}>
        <Typography variant="body1">Status - {status}</Typography>
      </Box>
      {inputImageUrl && (
        <Container maxWidth="sm">
          <Box my={4}>
            <img src={inputImageUrl} width={275} alt="wow" />
          </Box>
        </Container>
      )}
      {status !== 'complete' && (
        <Box my={4}>
          {console.log(rowData)}
          <Button variant="outlined">Toggle Status</Button>
        </Box>
      )}
    </Container>
  );
};

export default PredictionsTableItem;
