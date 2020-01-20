import React from 'react';
import Loadable from '@loadable/component';

import StoreLayout from 'src/layouts/storeLayout';
import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const PredictionsComponent = Loadable(
  () => import('src/components/predictions/predictionsComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const Predictions = () => {
  return (
    <StoreLayout>
      <SEO title="Predictions - Deep Six Design" />
      <PredictionsComponent />
    </StoreLayout>
  );
};

export default Predictions;
