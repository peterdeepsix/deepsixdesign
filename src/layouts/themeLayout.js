import React from 'react';

import Loadable from '@loadable/component';

import IndefiniteLoading from '../components/loading/indefiniteLoading';

const ThemeLayoutComponent = Loadable(
  () => import('../components/themeLayout/themeLayoutComponent'),
  {
    fallback: <IndefiniteLoading message="ThemeLayoutComponent" />,
  },
);

const ThemeLayout = ({ children }) => {
  return (
    <main>
      <ThemeLayoutComponent>{children}</ThemeLayoutComponent>
    </main>
  );
};

export default ThemeLayout;
