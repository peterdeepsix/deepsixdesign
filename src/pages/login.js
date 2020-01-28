import React from 'react';
import { Router } from '@reach/router';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const LoginComponent = Loadable(
  () => import('src/components/login/loginComponent'),
  {
    fallback: <IndefiniteLoading message="LoginComponent" />,
  },
);

const Predictions = () => {
  return (
    <AppLayout>
      <SEO title="Predictions - Deep Six Design" />
      <Router>
        <LoginComponent path="/login" />
      </Router>
    </AppLayout>
  );
};

export default Predictions;
