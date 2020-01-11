import React from 'react';

import DefaultLayout from '../components/layout/defaultLayout';
import StoreLayout from '../components/layout/storeLayout';

import SEO from '../components/seo';
import Loading from '../components/loading';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';

// Async loadable imports
import Loadable from '@loadable/component';

const TimelineComponent = Loadable(
  () => import('../components/timelineComponent'),
  {
    fallback: <Loading />,
  },
);

// const useStyles = makeStyles(theme => ({
//   root: {
//   },
// }));

const Timeline = () => {
  // const classes = useStyles();

  return (
    <DefaultLayout>
      <StoreLayout>
        <SEO title="Timeline" />
        <TimelineComponent />
      </StoreLayout>
    </DefaultLayout>
  );
};

export default Timeline;
