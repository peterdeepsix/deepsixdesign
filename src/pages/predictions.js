import React from 'react';

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
    <StoreLayout>
      <SEO title="Predictions" />
      <PredictionsComponent />
    </StoreLayout>
  );
};

export default Predictions;
