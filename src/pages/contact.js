import React from 'react';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout'

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const ContactPage = () => {
  return (
    <AppLayout>
      <SEO title="Contact - Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4">Contact</Typography>
        </Box>
      </Container>
    </AppLayout>
  );
};

export default ContactPage;
