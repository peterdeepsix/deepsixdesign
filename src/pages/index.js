import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import DefaultLayout from '../components/layouts/defaultLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Image from '../components/image';

import Loadable from '@loadable/component';

const App = Loadable(() => import('../components/app/app'), {
  fallback: <Loading />,
});

const IndexPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <DefaultLayout>
      <SEO title="Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Image />
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default IndexPage;
