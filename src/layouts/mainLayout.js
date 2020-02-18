import React from 'react';

import Loadable from '@loadable/component';

import IndefiniteLoading from '../components/loading/indefiniteLoading';

const MainLayoutComponent = Loadable(
  () => import('../components/mainLayout/mainLayoutComponent'),
  {
    fallback: <IndefiniteLoading message="MainLayoutComponent" />,
  },
);

const MainLayout = ({ children }) => {
  return (
    <main>
      <MainLayoutComponent>{children}</MainLayoutComponent>
    </main>
  );
};

export default MainLayout;
