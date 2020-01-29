import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import AccountButton from './accountButton';

const IndexComponent = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4">Light forward</Typography>
        <AccountButton />
      </Box>
    </Container>
  );
};

export default IndexComponent;
