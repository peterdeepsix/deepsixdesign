import React from 'react';

import Typography from '@material-ui/core/Typography';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout'



const ContactPage = () => {
  return (
    <AppLayout>
      <SEO title="Contact - Deep Six Design" />
      <Typography variant="h4">Contact</Typography>
    </AppLayout>
  );
};

export default ContactPage;
