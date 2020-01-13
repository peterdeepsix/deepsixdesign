import React from 'react';

import DefaultLayout from '../components/layouts/defaultLayout';
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
    <DefaultLayout>
      <div className={classes.root}>
        <SEO title="404: Not found" />
        <Typography variant="h1" component="h1" gutterBottom>
          404: Not found
        </Typography>
        <Typography variant="body1" gutterBottom>
          Spread love and light!
        </Typography>
      </div>
    </DefaultLayout>
  );
};
export default NotFoundPage;
