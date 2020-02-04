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
      </Box>
      <Box my={4}>
        <Button
          variant="outlined"
          size="large"
          component={Link}
          to="/about"
        >
          Public Pages
        </Button>
      </Box>
      <Box my={4}>
        <Button
          variant="outlined"
          size="large"
          component={Link}
          to="/app"
        >
          Web App
        </Button>
      </Box>
    </Container>
  );
};

export default IndexComponent;
