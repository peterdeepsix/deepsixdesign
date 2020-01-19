import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import SEO from '../components/seo';
import IndefiniteLoading from '../components/loading/indefiniteLoading';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Loadable from '@loadable/component';

const GeneratorComponent = Loadable(
  () => import('../components/generator/generatorComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const GeneratorPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_generator');
  }, []);
  return (
    <React.Fragment>
      <SEO title="Generator - Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <GeneratorComponent />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default GeneratorPage;
