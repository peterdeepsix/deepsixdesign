import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import {
  SearchBox,
  Hits,
  connectHighlight,
} from 'react-instantsearch-dom';

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

const CustomHighlight = connectHighlight(
  ({ highlight, attribute, hit }) => {
    const parsedHit = highlight({
      highlightProperty: '_highlightResult',
      attribute,
      hit,
    });

    return (
      <div>
        {parsedHit.map(part =>
          part.isHighlighted ? <mark>{part.value}</mark> : part.value,
        )}
      </div>
    );
  },
);

const Hit = ({ hit }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Product" />
        </ListItemAvatar>
        <ListItemText
          primary="Product Name"
          secondary={<CustomHighlight attribute="name" hit={hit} />}
        />
      </ListItem>
    </>
  );
};

export default Hit;
