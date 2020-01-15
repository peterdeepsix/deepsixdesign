import React from 'react';

import AppLayout from '../components/layouts/appLayout';
import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';
import Skeleton from '@material-ui/lab/Skeleton';

import Loadable from '@loadable/component';

const PredictionsComponent = Loadable(
  () => import('../components/predictionsComponent'),
  {
    fallback: (
      <div>
        <Loading />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="rect" width={210} height={118} />
      </div>
    ),
  },
);

const Predictions = () => {
  return (
    <AppLayout>
      <StoreLayout>
        <SEO title="Predictions" />
        <PredictionsComponent />
      </StoreLayout>
    </AppLayout>
  );
};

export default Predictions;
