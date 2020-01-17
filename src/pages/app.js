import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

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
    <React.Fragment>
      <SEO title="Deep Six Design" />
      <AppComponent />
    </React.Fragment>
  );
};

export default IndexPage;
