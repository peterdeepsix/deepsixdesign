import React from 'react';

import AppLayout from '../components/layouts/appLayout';
import SEO from '../components/seo';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <AppLayout>
      <div className={classes.root}>
        <SEO title="404: Not found" />
        <Typography variant="h4" component="h4" gutterBottom>
          404: Not found
        </Typography>
        <Typography variant="body1" gutterBottom>
          Spread love and light! I reckon you should ask the pixies
          for help.
        </Typography>
      </div>
    </AppLayout>
  );
};
export default NotFoundPage;
