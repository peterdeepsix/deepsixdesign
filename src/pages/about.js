import React from 'react';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const AboutComponent = Loadable(
  () => import('src/components/about/aboutComponent'),
  {
    fallback: <IndefiniteLoading message="AboutComponent" />,
  },
);

const AppLayout = Loadable(() => import('src/layouts/appLayout'), {
  fallback: <IndefiniteLoading message="AppLayout" />,
});

const AboutPage = ({ location }) => {
  return (
    <AppLayout location={location}>
      <SEO title="About - Deep Six Design" />
      <AboutComponent />
    </AppLayout>
  );
};

export default AboutPage;
