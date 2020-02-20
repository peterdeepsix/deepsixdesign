import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-dom';

import SearchField from './components/searchField';

const searchClient = algoliasearch(
  process.env._GATSBY_ALGOLIA_APP_ID,
  process.env._GATSBY_ALGOLIA_ADMIN_API_KEY,
);

const useStyles = makeStyles(theme => ({
  root: {},
}));

const SearchComponent = () => {
  const classes = useStyles();
  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env._GATSBY_ALGOLIA_INDEX_NAME}
      >
        <SearchField />
      </InstantSearch>
    </>
  );
};

export default SearchComponent;
