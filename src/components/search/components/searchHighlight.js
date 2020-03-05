import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { connectHighlight } from 'react-instantsearch-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const UnconnectedHighlight = connectHighlight(
  ({ highlight, attribute, hit }) => {
    const classes = useStyles();

    const parsedHit = highlight({
      highlightProperty: '_highlightResult',
      attribute,
      hit,
    });

    return (
      <>
        {parsedHit.map((part, index) =>
          part.isHighlighted ? (
            <mark key={index}>{part.value}</mark>
          ) : (
            <span key={index}>{part.value}</span>
          ),
        )}
      </>
    );
  },
);

const SearchHighlight = connectHighlight(UnconnectedHighlight);

export default SearchHighlight;
