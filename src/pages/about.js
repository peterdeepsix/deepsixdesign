import React from 'react';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const AboutComponent = Loadable(
  () => import('src/components/about/aboutComponent'),
  {
    fallback: <IndefiniteLoading message="AboutComponent" />,
  },
);

const AboutPage = () => {
  return (
    <>
      <AboutComponent />
    </>
  );
};

export default AboutPage;
