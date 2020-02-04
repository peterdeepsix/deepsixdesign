import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Generator from './generator';

const GeneratorComponent = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4">Generator</Typography>
        </Box>
        <Box my={4}>
          <Typography variant="body1" gutterBottom>
            Implementation of Generative Artistry
          </Typography>
          <Link
            target="_blank"
            href="https://generativeartistry.com/tutorials/piet-mondrian/"
          >
            Source - generativeartistry.com
          </Link>
          <br />
          <Typography variant="h4" gutterBottom>
            Piet Mondrian
          </Typography>
        </Box>
        <Box my={4}>
          <Generator />
        </Box>
      </Container>
    </>
  );
};

export default GeneratorComponent;
