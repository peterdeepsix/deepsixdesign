import React from 'react';

import { Hits, connectStateResults } from 'react-instantsearch-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const ConnectedResults = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0
      ? children
      : `No results for '${state.query}'`,
);

const Results = () => {
  const classes = useStyles();
  return (
    <Results>
      <Hits hitComponent={hitComps[hitComp](() => setFocus(false))} />
    </Results>
  );
};

export default ConnectedResults;
