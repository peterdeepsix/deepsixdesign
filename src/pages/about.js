import React from 'react';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const AboutComponent = Loadable(
  () => import('src/components/about/aboutComponent'),
  {
    fallback: <IndefiniteLoading message="AboutComponent" />,
  },
);

const AboutPage = ({ location }) => {
  return (
    <AppLayout location={location}>
      <SEO title="About - Deep Six Design" />
      <AboutComponent />
    </AppLayout>
  );
};

export default AboutPage;
