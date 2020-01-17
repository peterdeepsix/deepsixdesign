import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import AppLayout from '../components/layouts/appLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';

import Loadable from '@loadable/component';

const AboutComponent = Loadable(
  () => import('../components/about/aboutComponent'),
  {
    fallback: <Loading />,
  },
);

const IndexPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <AppLayout>
      <SEO title="Deep Six Design" />
      <AboutComponent />
    </AppLayout>
  );
};

export default IndexPage;
