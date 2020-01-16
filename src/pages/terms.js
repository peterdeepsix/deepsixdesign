import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import Typography from '@material-ui/core/Typography';

import AppLayout from '../components/layouts/appLayout';
import SEO from '../components/seo';

const TermsPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <AppLayout>
      <SEO title="Deep Six Design" />
      <Typography variant="h4">Terms</Typography>
    </AppLayout>
  );
};

export default TermsPage;
