import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'src/components/Link';

const IndexComponent = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4">Deep Six Design</Typography>
        <Button variant="outlined" component={Link} to="/about">
          Open Application
        </Button>
      </Box>
    </Container>
  );
};

export default IndexComponent;
