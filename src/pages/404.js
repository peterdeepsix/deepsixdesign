import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout'

const NotFoundPage = () => {

  return (
    <AppLayout>
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
    </AppLayout>
  );
};
export default NotFoundPage;
