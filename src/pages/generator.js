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

const GeneratorComponent = Loadable(
  () => import('src/components/generator/generatorComponent'),
  {
    fallback: <IndefiniteLoading message="GeneratorComponent" />,
  },
);

const GeneratorPage = ({ location }) => {
  return (
    <AppLayout location={location}>
      <SEO title="Generator - Deep Six Design" />
      <Router>
        <PrivateRouteComponent
          path="/generator"
          component={GeneratorComponent}
        />
        <LoginComponent path="/signin" />
      </Router>
    </AppLayout>
  );
};

export default GeneratorPage;
