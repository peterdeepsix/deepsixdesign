import React from 'react';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const HomeLayout = Loadable(() => import('src/layouts/homeLayout'), {
  fallback: <IndefiniteLoading message="HomeLayout" />,
});

const AboutComponent = Loadable(
  () => import('src/components/about/aboutComponent'),
  {
    fallback: <IndefiniteLoading message="AboutComponent" />,
  },
);

const AboutPage = () => {
  return (
    <HomeLayout>
      <AboutComponent />
    </HomeLayout>
  );
};

export default AboutPage;
