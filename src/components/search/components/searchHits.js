import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import List from '@material-ui/core/List';

import { Hits } from 'react-instantsearch-dom';

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

const SearchHits = () => {
  const isDesktop = useMediaQuery('(min-width:600px)');
  console.log(isDesktop);
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <Hits hitComponent={Hit} />
    </List>
  );
};

export default SearchHits;
