import React from 'react';

import Loading from '../loading';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Loadable from '@loadable/component';

const Image = Loadable(() => import('../image'), {
  fallback: <Loading />,
});

const AppComponent = () => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Image />
    </Box>
  </Container>
);

export default AppComponent;
