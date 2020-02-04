import React from 'react';

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
      <AppComponent location={location}>{children}</AppComponent>
    </main>
  );
};

export default AppLayout;
