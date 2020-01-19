import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Image from './image';

const IndexComponent = () => {
  return (
    <Container>
      <Box maxWidth="sm">
        <Image />
      </Box>
    </Container>
  );
};

export default IndexComponent;
