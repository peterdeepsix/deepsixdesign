import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { SearchBox } from 'react-instantsearch-dom';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const SearchField = () => {
  const classes = useStyles();
  return (
    <>
      <SearchBox />
    </>
  );
};

export default SearchField;
