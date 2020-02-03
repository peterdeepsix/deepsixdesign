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

const DependenciesComponent = Loadable(
  () => import('src/components/dependencies/dependenciesComponent'),
  {
    fallback: <IndefiniteLoading message="DependenciesComponent" />,
  },
);

const DependenciesPage = ({ location, data }) => {
  return (
    <AppLayout location={location}>
      <SEO title="Dependencies - Deep Six Design" />
      <Router>
        <PrivateRouteComponent
          path="/dependencies"
          component={DependenciesComponent}
        />
        <LoginComponent path="/signin" />
      </Router>
    </AppLayout>
  );
};

export default DependenciesPage;
