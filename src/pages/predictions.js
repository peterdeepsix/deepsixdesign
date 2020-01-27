import React from 'react';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const PredictionsComponent = Loadable(
  () => import('src/components/predictions/predictionsComponent'),
  {
    fallback: <IndefiniteLoading message="PredictionsComponent" />,
  },
);

const Predictions = () => {
  return (
    <AppLayout>
      <SEO title="Predictions - Deep Six Design" />
      <PredictionsComponent />
    </AppLayout>
  );
};

export default Predictions;
