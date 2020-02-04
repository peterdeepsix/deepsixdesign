import React from 'react';
import { Router } from '@reach/router';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';
import PrivateRouteComponent from 'src/components/privateRoute/privateRouteComponent';

const AppLayout = Loadable(() => import('src/layouts/appLayout'), {
  fallback: <IndefiniteLoading message="AppLayout" />,
});

const SEOComponent = Loadable(
  () => import('src/components/seo/seoComponent'),
  {
    fallback: <IndefiniteLoading message="SEOComponent" />,
  },
);

const DefaultComponent = Loadable(
  () => import('src/components/default/defaultComponent'),
  {
    fallback: <IndefiniteLoading message="DefaultComponent" />,
  },
);

const GeneratorComponent = Loadable(
  () => import('src/components/generator/generatorComponent'),
  {
    fallback: <IndefiniteLoading message="GeneratorComponent" />,
  },
);

const AppPage = () => {
  return (
    <>
      <SEOComponent title="App - Deep Six Design" />
      <Router>
        <DefaultComponent path="/app" />
        <GeneratorComponent path="/generator" />
      </Router>
    </>
  );
};

export default AppPage;
