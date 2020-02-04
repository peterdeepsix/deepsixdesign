import React from 'react';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const DependenciesComponent = Loadable(
  () => import('src/components/dependencies/dependenciesComponent'),
  {
    fallback: <IndefiniteLoading message="DependenciesComponent" />,
  },
);

const DependenciesPage = () => {
  return (
    <>
      <DependenciesComponent />
    </>
  );
};

export default DependenciesPage;
