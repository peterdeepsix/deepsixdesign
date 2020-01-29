import React from 'react';
import { Router } from '@reach/router';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';
import PrivateRouteComponent from 'src/components/privateRoute/privateRouteComponent';

const LoginComponent = Loadable(
  () => import('src/components/login/logInComponent'),
  {
    fallback: <IndefiniteLoading message="LoginComponent" />,
  },
);

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
      <Router>
        <PrivateRouteComponent
          path="/predictions"
          component={PredictionsComponent}
        />
        <LoginComponent path="/login" />
      </Router>
    </AppLayout>
  );
};

export default Predictions;
