import React, { useEffect, useState } from 'react';
import { compose } from 'recompose';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { connectSearchBox } from 'react-instantsearch-dom';

const useStyles = makeStyles(theme => ({
  iconButton: {
    padding: 10,
  },
}));

const UnconnectedSearchTextField = ({
  currentRefinement,
  isSearchStalled,
  refine,
}) => {
  const classes = useStyles();

  if (isSearchStalled) console.log('search is stalled');
  return (
    <form noValidate action="" role="search">
      <TextField
        placeholder="Search..."
        fullWidth
        size="small"
        autoFocus
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
        variant="outlined"
      />
    </form>
  );
};

const SearchTextField = compose(connectSearchBox)(
  UnconnectedSearchTextField,
);

export default SearchTextField;
