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

const StreamComponent = Loadable(
  () => import('src/components/stream/streamComponent'),
  {
    fallback: <IndefiniteLoading message="StreamComponent" />,
  },
);

const StreamPage = () => {
  return (
    <AppLayout>
      <SEO title="Stream - Deep Six Design" />
      <Router>
        <PrivateRouteComponent
          path="/stream"
          component={StreamComponent}
        />
        <LoginComponent path="/signin" />
      </Router>
    </AppLayout>
  );
};

export default StreamPage;
