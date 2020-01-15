import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import Typography from '@material-ui/core/Typography';

import AppLayout from '../components/layouts/appLayout';
import SEO from '../components/seo';

const ContactPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <AppLayout>
      <SEO title="Deep Six Design" />
      <Typography variant="h1">Contact</Typography>
    </AppLayout>
  );
};

export default ContactPage;