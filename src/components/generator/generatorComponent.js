import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import Generator from './generator';

const GeneratorComponent = () => {

  return (
    <React.Fragment>
      <Typography variant="body1" gutterBottom>
        Implementation of Generative Artistry
      </Typography>
      <Link target="_blank" href='https://generativeartistry.com/tutorials/piet-mondrian/'>Source - generativeartistry.com</Link>
      <br />
      <Typography variant="h4" gutterBottom>
        Piet Mondrian
      </Typography>
      <Generator />
    </React.Fragment>
  );
};

export default GeneratorComponent
