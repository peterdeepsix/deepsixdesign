import React from 'react';

import AppLayout from '../components/layouts/appLayout';
import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';

import Loadable from '@loadable/component';

const PredictionsComponent = Loadable(
  () => import('../components/predictions/predictionsComponent'),
  {
    fallback: <Loading />,
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
