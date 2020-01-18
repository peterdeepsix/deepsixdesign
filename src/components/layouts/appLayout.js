import React from 'react';
import { Helmet } from 'react-helmet';
import Loadable from '@loadable/component';

import Loading from '../loading';

const AppComponent = Loadable(() => import('../app/appComponent'), {
  fallback: <Loading isCircular />,
});

const AppLayout = ({ children }) => {
  return (
    <main>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <AppComponent>{children}</AppComponent>
    </main>
  );
};

export default AppLayout;
