import React, { useState } from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import AppLayout from '../components/layouts/appLayout';
import MediaDropzoneArea from '../components/mediaDropzoneArea';
import SEO from '../components/seo';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Media = () => {
  const [storage, setStorage] = useState(null);
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_media');
  }, []);

  useFirebase(firebase => {
    setStorage(firebase.storage());
  }, []);
  return (
    <AppLayout>
      <SEO title="Media" />
      <Container maxWidth="sm">
        <Box my={4}>
          <MediaDropzoneArea storage={storage} />
        </Box>
      </Container>
    </AppLayout>
  );
};

export default Media;
