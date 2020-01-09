import React, { useState } from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Async loadable imports
import Loadable from '@loadable/component';
const PredictionsTable = Loadable(() =>
  import('../components/predictionsTable'),
);

const Predictions = () => {
  const [storage, setStorage] = useState();

  useFirebase(firebase => {
    setStorage(firebase.storage());
  }, []);

  return (
    <Layout>
      <SEO title="Predictions" />
      <Container maxWidth="md">
        <Box my={4}>
          <PredictionsTable />
        </Box>
      </Container>
    </Layout>
  );
};

export default Predictions;
