import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import { connectHits } from 'react-instantsearch-dom';

import Hit from './hit';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 512,
    backgroundColor: theme.palette.background.paper,
    listStyleType: 'none',
    paddingInlineStart: 0,
  },
}));

const SearchHits = ({ hits }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {hits.map(hit => (
        <>
          <Hit key={hit.stripeId} hit={hit} />
          <Divider />
        </>
      ))}
    </List>
  );
};

export default connectHits(SearchHits);
