import React from 'react';

import Ticker from 'react-ticker';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  chip: {
    marginRight: theme.spacing(1),
  },
}));

const TickerComponent = ({ data }) => {
  const classes = useStyles();
  const lists = data.allTrelloList.edges;
  return (
    <>
      <Ticker>
        {() => (
          <>
            {lists.map(list =>
              list.node.cards.map(card => (
                <Chip
                  key={card.id}
                  className={classes.chip}
                  variant="outlined"
                  label={card.name}
                />
              )),
            )}
          </>
        )}
      </Ticker>
    </>
  );
};

export default TickerComponent;
