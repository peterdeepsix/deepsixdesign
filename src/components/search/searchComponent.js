import React, { useState, useEffect, createRef } from 'react';

import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-dom';

import SearchAutoComplete from './components/searchAutoComplete';
import SearchResults from './components/searchResults';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {},
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  searchbutton: {
    width: 300,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 340,
    },
  },
  autoComplete: {
    // borderColor: theme.palette.text.primary,
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

const SearchComponent = () => {
  const classes = useStyles();
  const ref = createRef();
  const [query, setQuery] = useState(``);

  const searchClient = algoliasearch(
    process.env._GATSBY_ALGOLIA_APP_ID,
    process.env._GATSBY_ALGOLIA_ADMIN_API_KEY,
  );

  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env._GATSBY_ALGOLIA_INDEX_NAME}
        onSearchStateChange={({ query }) => setQuery(query)}
        root={{ props: { ref } }}
      >
        <AppBar
          className={classes.appBar}
          positon="sticky"
          color="inherit"
        >
          <Toolbar className={classes.toolbar}>
            <IconButton edge="start" color="inherit">
              <ArrowBackOutlinedIcon />
            </IconButton>
            <SearchAutoComplete />
            <div className={classes.grow} />
            <IconButton edge="end" color="inherit">
              <CancelOutlinedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar className={classes.toolbar}></Toolbar>
        <SearchResults />
      </InstantSearch>
    </>
  );
};

export default SearchComponent;
