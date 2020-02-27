import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import SearchHits from './searchHits';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const SearchResults = () => {
  const classes = useStyles();
  return (
    <>
      <SearchHits />
    </>
  );
};

export default SearchResults;
