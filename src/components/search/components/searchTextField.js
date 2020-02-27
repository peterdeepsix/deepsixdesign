import React, { useEffect, useState } from 'react';
import { compose } from 'recompose';
import { SearchBox } from 'react-instantsearch-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

import {
  connectStateResults,
  connectSearchBox,
} from 'react-instantsearch-dom';

import SearchHits from './searchHits';

const useStyles = makeStyles(theme => ({
  iconButton: {
    padding: 10,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

const UnconnectedSearchTextField = ({
  InputProps,
  open,
  loading,
  searchResults,
  refine,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <TextField
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      placeholder="Search..."
      fullWidth
      onChange={e => refine(e.target.value)}
      variant="outlined"
      InputProps={{
        ...InputProps,
        endAdornment: (
          <>
            {loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : null}
          </>
        ),
      }}
      {...rest}
    />
  );
};

const SearchTextField = compose(
  connectSearchBox,
  connectStateResults,
)(UnconnectedSearchTextField);

export default UnconnectedSearchTextField;
