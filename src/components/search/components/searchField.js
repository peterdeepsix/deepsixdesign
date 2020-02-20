import React, { useEffect, useState } from 'react';

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

import SearchHits from './searchHits';

const useStyles = makeStyles(theme => ({
  auto: {
    width: 300,
  },
  style: {
    padding: '2px 4px',
  },
  input: {
    marginLeft: theme.spacing(1),
  },
  iconButton: {
    padding: 10,
  },
}));

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

const SearchField = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch(
        'https://country.register.gov.uk/records.json?page-size=5000',
      );
      await sleep(1e3); // For demo purposes.
      const countries = await response.json();

      if (active) {
        setOptions(
          Object.keys(countries).map(key => countries[key].item[0]),
        );
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return (
    <>
      <Autocomplete
        className={classes.auto}
        color="inherit"
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
        renderInput={params => (
          <>
            <TextField
              {...params}
              variant="outlined"
              fullWidth
              className={classes.input}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          </>
        )}
      />
    </>
  );
};

export default SearchField;
