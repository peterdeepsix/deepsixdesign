import React from 'react';

import SEO from '../components/seo';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <SEO title="404: Not found - Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4">404: Not Found</Typography>
        </Box>
        <Box my={4}>
          <Typography variant="body1" gutterBottom>
            Spread love and light! I reckon you should ask the pixies
            for help.
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
};
export default NotFoundPage;
