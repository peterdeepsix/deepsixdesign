import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import AppLayout from '../components/layouts/appLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';

import Loadable from '@loadable/component';

const AppComponent = Loadable(
  () => import('../components/app/appComponent'),
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
      <AppComponent />
    </AppLayout>
  );
};

export default IndexPage;
