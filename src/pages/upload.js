import React, { useState } from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import DefaultLayout from '../components/layouts/defaultLayout';
import SEO from '../components/seo';
import FirebaseObject from '../components/firebaseObject';
import DisplayObjects from '../components/displayObjects';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// Async loadable imports
import Loadable from '@loadable/component';
const LoadableCamera = Loadable(() => import('../components/camera'));

const Upload = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();
  const [cardObjects, setCardObjects] = useState();

  return (
    <DefaultLayout>
      <SEO title="Upload" />
      <Container maxWidth="md">
        <Box my={4}>
          <FirebaseObject />
        </Box>
        <Box my={4}>
          <Button
            variant="outlined"
            onClick={() => setIsCameraOpen(true)}
          >
            Open Camera
          </Button>
        </Box>
        <Box my={4}>
          <Button
            onClick={() => {
              setIsCameraOpen(false);
              setCardImage(undefined);
            }}
          >
            Close Camera
          </Button>
        </Box>

        {cardObjects && (
          <Box my={4}>
            <Paper>
              <Typography variant="h6" gutterBottom>
                Image
              </Typography>
              <DisplayObjects
                image={cardImage && URL.createObjectURL(cardImage)}
                objects={cardObjects}
              />
              <img
                alt="Output"
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
              <LoadableCamera
                onCapture={(blob, objects) => {
                  setCardImage(blob);
                  console.log(`blog ${blob}`);
                  setCardObjects(objects[0]);
                  console.log(`blog ${objects}`);
                }}
                onClear={() => setCardImage(undefined)}
              />
            </Paper>
          </Box>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default Upload;
