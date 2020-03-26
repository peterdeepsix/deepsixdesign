import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import SearchHits from './searchHits';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const SearchResults = ({ handleClose }) => {
  const classes = useStyles();
  return (
    <>
      <SearchHits handleClose={handleClose} />
    </>
  );
};

export default SearchResults;
