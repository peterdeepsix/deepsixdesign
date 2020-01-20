import React from 'react';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const AboutComponent = Loadable(
  () => import('src/components/about/aboutComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const AboutPage = () => {
  return (
    <>
      <SEO title="About - Deep Six Design" />
      <AboutComponent />
    </>
  );
};

export default AboutPage;
