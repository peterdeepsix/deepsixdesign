import React, { useState, useEffect, createRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-dom';

import SearchAutoComplete from './components/searchAutoComplete';

const useStyles = makeStyles(theme => ({
  root: {},
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
        <SearchAutoComplete />
      </InstantSearch>
    </>
  );
};

export default SearchComponent;
