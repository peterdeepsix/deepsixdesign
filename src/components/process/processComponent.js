import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';

const styles = ({ breakpoints, transitions }) => ({
  root: {
    padding: 16,
    transition: transitions.create(),
    [breakpoints.up('sm')]: {
      padding: 24,
      maxWidth: 700,
      margin: 'auto',
    },
    [breakpoints.up('md')]: {
      maxWidth: 960,
    },
  },
});

const ProcessComponent = ({ data, classes }) => {
  const node = data.allProcesses.edges[0].node;
  return (
    <Card className={classes.card} elevation={0}>
      <div className={classes.root}>
        <Typography variant={'overline'}>Details</Typography>
        <Typography variant={'h4'} gutterBottom>
          {node.title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Step {node.step}
        </Typography>
        <Typography variant="body1" indent={'small'}>
          {node.definition}
        </Typography>
      </div>
    </Card>
  );
};

export default withStyles(styles)(ProcessComponent);
