import React from 'react';

import Loadable from '@loadable/component';

import IndefiniteLoading from '../components/loading/indefiniteLoading';

const HomeComponent = Loadable(
  () => import('../components/home/homeComponent'),
  {
    fallback: <IndefiniteLoading message="HomeComponent" />,
  },
);

const HomeLayout = ({ children, location }) => {
  return (
    <main>
      <HomeComponent location={location}>{children}</HomeComponent>
    </main>
  );
};

export default HomeLayout;
