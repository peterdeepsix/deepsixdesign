import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Hits } from 'react-instantsearch-dom';

import List from '@material-ui/core/List';

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
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <Hits hitComponent={Hit} />
    </List>
  );
};

export default SearchHits;
