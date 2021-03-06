import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'src/components/Link';

const DefaultComponent = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4">Web App</Typography>
        </Box>
      </Container>
    </>
  );
};

export default DefaultComponent;
