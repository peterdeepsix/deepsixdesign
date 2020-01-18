import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';
import Loadable from '@loadable/component';

import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import IndefiniteLoading from '../components/loading/indefiniteLoading';

const PredictionsComponent = Loadable(
  () => import('../components/predictions/predictionsComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const Predictions = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_predictions');
  }, []);
  return (
    <StoreLayout>
      <SEO title="Predictions - Deep Six Design" />
      <PredictionsComponent />
    </StoreLayout>
  );
};

export default Predictions;
