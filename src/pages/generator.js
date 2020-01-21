import React from 'react';

import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Loadable from '@loadable/component';

const GeneratorComponent = Loadable(
  () => import('src/components/generator/generatorComponent'),
  {
    fallback: <IndefiniteLoading message='GeneratorComponent' />,
  },
);

const GeneratorPage = () => {
  return (
    <>
      <SEO title="Generator - Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <GeneratorComponent />
        </Box>
      </Container>
    </>
  );
};

export default GeneratorPage;
