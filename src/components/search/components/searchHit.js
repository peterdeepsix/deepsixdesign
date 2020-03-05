import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import LinkComponent from 'src/components/link/linkComponent';

import SearchHighlight from './searchHighlight';

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

const Hit = ({ hit }) => {
  const classes = useStyles();

  const { slug, title, shortOverview, media } = hit;

  console.log(hit);
  return (
    <>
      <ListItem
        component={LinkComponent}
        color="inherit"
        to={`/buy/${slug}`}
        alignItems="flex-start"
      >
        <ListItemAvatar>
          <Avatar src={media[0].resolutions.src} alt={title.title} />
        </ListItemAvatar>
        <ListItemText
          className={classes.inline}
          primary={
            <SearchHighlight hit={hit} attribute="title.title" />
          }
          secondary={
            <SearchHighlight
              hit={hit}
              attribute="shortOverview.content[0].content[0].value"
            />
          }
        />
      </ListItem>
    </>
  );
};

export default Hit;
