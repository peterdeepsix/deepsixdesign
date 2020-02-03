import React from 'react';
import { Helmet } from 'react-helmet';
import Loadable from '@loadable/component';

import IndefiniteLoading from '../components/loading/indefiniteLoading';

const AppComponent = Loadable(
  () => import('../components/app/appComponent'),
  {
    fallback: <IndefiniteLoading message="AppComponent" />,
  },
);

const AppLayout = ({ children, location }) => {
  return (
    <main>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <AppComponent location={location}>{children}</AppComponent>
    </main>
  );
};

export default AppLayout;
