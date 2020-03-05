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

const UnconnectedSearchTextField = ({ refine }) => {
  const classes = useStyles();

  return (
    <TextField
      placeholder="Search..."
      fullWidth
      size="small"
      autoFocus
      onChange={e => refine(e.target.value)}
      variant="outlined"
    />
  );
};

const SearchTextField = compose(connectSearchBox)(
  UnconnectedSearchTextField,
);

export default SearchTextField;
