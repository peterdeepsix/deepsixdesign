import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import TickerComponent from 'src/components/ticker/tickerComponent';
import SearchComponent from 'src/components/search/searchComponent';

const IndexComponent = ({ data }) => {
  return (
    <>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h3">Deep Six Design</Typography>
        </Box>
      </Container>
      <TickerComponent data={data} />
    </>
  );
};

export default IndexComponent;
