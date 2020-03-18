import React from 'react';

import Loadable from '@loadable/component';

import IndefiniteLoading from '../components/loading/indefiniteLoading';

const ThemeLayoutComponent = Loadable(
  () => import('src/components/themeLayout/ThemeLayoutComponent'),
  {
    fallback: <IndefiniteLoading message="ThemeLayoutComponent" />,
  },
);

const ThemeLayout = ({ children }) => {
  return <ThemeLayoutComponent>{children}</ThemeLayoutComponent>;
};

export default ThemeLayout;
