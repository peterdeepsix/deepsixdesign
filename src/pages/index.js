import React from 'react';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const HomeLayout = Loadable(() => import('src/layouts/homeLayout'), {
  fallback: <IndefiniteLoading message="HomeLayout" />,
});

const IndexComponent = Loadable(
  () => import('src/components/index/indexComponent'),
  {
    fallback: <IndefiniteLoading message="IndexComponent" />,
  },
);

const IndexPage = () => {
  return (
    <HomeLayout>
      <IndexComponent />
    </HomeLayout>
  );
};

export default IndexPage;
