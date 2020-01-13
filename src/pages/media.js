import React, { useState } from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import DefaultLayout from '../components/layouts/defaultLayout';
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
    <DefaultLayout>
      <SEO title="Media" />
      <Container maxWidth="sm">
        <Box my={4}>
          <MediaDropzoneArea storage={storage} />
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default Media;
