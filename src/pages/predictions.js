import React from 'react';
import Loadable from '@loadable/component';

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
    <>
      <SEO title="Predictions - Deep Six Design" />
      <PredictionsComponent />
    </>
  );
};

export default Predictions;
