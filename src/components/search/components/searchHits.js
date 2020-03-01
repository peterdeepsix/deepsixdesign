import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import List from '@material-ui/core/List';

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
  const isDesktop = useMediaQuery('(min-width:600px)');
  console.log(isDesktop);
  const classes = useStyles();
  console.log('hits in searchHits');
  console.log(hits);
  return (
    <List className={classes.root}>
      {hits.map(hit => (
        <Hit key={hit.stripeId} hit={hit} />
      ))}
    </List>
  );
};

export default connectHits(SearchHits);
