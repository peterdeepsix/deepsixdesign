import React, { Fragment, useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Loadable from '@loadable/component';

const LoadablePredictObjects = Loadable(() =>
  import('../components/predictObjects'),
);

const Objects = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  return (
    <Layout>
      <SEO title="Objects" />
      <Container maxWidth="md">
        <Box my={4}>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => setIsCameraOpen(true)}
          >
            Open Camera
          </Button>

          <Button
            onClick={() => {
              setIsCameraOpen(false);
              setCardImage(undefined);
            }}
          >
            Close Camera
          </Button>
        </Box>

        {cardImage && (
          <Box my={4}>
            <Paper>
              <Typography variant="h6" gutterBottom>
                Image
              </Typography>
              <img
                src={cardImage && URL.createObjectURL(cardImage)}
              />
            </Paper>
          </Box>
        )}

        {isCameraOpen && (
          <Box my={4}>
            <Paper>
              <Typography variant="h6" gutterBottom>
                Camera
              </Typography>
              <LoadablePredictObjects
                onCapture={blob => setCardImage(blob)}
                onClear={() => setCardImage(undefined)}
              />
            </Paper>
          </Box>
        )}
      </Container>
    </Layout>
  );
};

export default Objects;
