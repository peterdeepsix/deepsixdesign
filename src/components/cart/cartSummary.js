import React, { useContext } from 'react';
import { navigate } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { CartContext } from './cartProvider';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  big: {
    fontSize: 16,
  },
  large: {
    fontSize: 24,
  },
  mainGrid: {
    [breakpoints.up('sm')]: {
      flexDirection: 'row-reverse',
    },
  },
}));

const DailySummary = () => {
  const styles = useStyles();
  const { total } = useContext(CartContext);

  return (
    <>
      <Box mt={2} mb={1}>
        <Box mt={2} mb={1} textAlign="right">
          <Typography>{`Items: $${total / 100}`}</Typography>
        </Box>
        <Box mt={2} mb={1} textAlign="right">
          <Typography>{`Shipping: $0`}</Typography>
        </Box>
        <Box mt={2} mb={1} textAlign="right">
          <Typography>{`Order Total: $${total / 100}`}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default DailySummary;
