import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const TermsPage = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4">Terms & Conditions</Typography>
        </Box>
      </Container>
    </>
  );
};

export default TermsPage;
