import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const StreamComponent = () => {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            Stream
      </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default StreamComponent;
