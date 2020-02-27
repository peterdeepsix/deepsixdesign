import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import SearchResults from './searchResults';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const SearchPopover = ({ textFieldRef, open }) => {
  const classes = useStyles();
  console.log(open);
  return (
    <>
      <Popover
        id="search-popover"
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {/* <SearchResults /> */}
      </Popover>
    </>
  );
};

export default SearchPopover;
