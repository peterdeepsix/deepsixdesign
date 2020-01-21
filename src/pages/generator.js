import React from 'react';
import Loadable from '@loadable/component';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout'
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const GeneratorComponent = Loadable(
  () => import('src/components/generator/generatorComponent'),
  {
    fallback: <IndefiniteLoading message='GeneratorComponent' />,
  },
);

const GeneratorPage = () => {
  return (
    <AppLayout>
      <SEO title="Generator - Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <GeneratorComponent />
        </Box>
      </Container>
    </AppLayout>
  );
};

export default GeneratorPage;
