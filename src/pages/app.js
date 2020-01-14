import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import AppLayout from '../components/layouts/appLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';
import ContentContent from '../components/app/components/ContentContent';

import Loadable from '@loadable/component';

const App = Loadable(() => import('../components/app/app'), {
  fallback: <Loading />,
});

const IndexPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <AppLayout>
      <SEO title="Deep Six Design" />
      <App />
    </AppLayout>
  );
};

export default IndexPage;
