import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
} from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  process.env._GATSBY_ALGOLIA_APP_ID,
  process.env._GATSBY_ALGOLIA_SEARCH_API_KEY,
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
        <SearchBox />
        <Hits />
      </InstantSearch>
    </>
  );
};

export default SearchComponent;
