import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import SearchComponent from 'src/components/search/searchComponent';
import LinkComponent from 'src/components/link/linkComponent';
import TickerComponent from 'src/components/ticker/tickerComponent';

const IndexComponent = ({ data }) => {
  return (
    <>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h3">Deep Six Design</Typography>
        </Box>
        <Box my={2}>
          <SearchComponent />
        </Box>
      </Container>
      <TickerComponent data={data} />
    </>
  );
};

export default IndexComponent;
