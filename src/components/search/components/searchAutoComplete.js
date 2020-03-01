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

import SearchTextField from './searchTextField';
import SearchPopover from './searchPopover';

const useStyles = makeStyles(theme => ({
  iconButton: {
    padding: 10,
  },
  textField: {
    width: 300,
  },
}));

const UnconnectedSearchAutoComplete = ({
  searchResults,
  refine,
  ...rest
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const textFieldRef = React.useRef();

  return (
    <>
      <Autocomplete
        id="search"
        size="small"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) =>
          option.name === value.name
        }
        getOptionLabel={option => option.name}
        options={options}
        loading={loading}
        popupIcon={null}
        renderInput={params => (
          <SearchTextField
            fullWidth
            className={classes.textField}
            ref={textFieldRef}
            open
            loaded
            {...params}
          />
        )}
      />
      <SearchPopover ref={textFieldRef} open={open} />
    </>
  );
};

const SearchAutoComplete = compose(
  connectSearchBox,
  connectStateResults,
)(UnconnectedSearchAutoComplete);

export default SearchAutoComplete;
