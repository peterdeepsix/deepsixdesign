import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import SEO from '../components/seo';
import Loading from '../components/loading';
import StoreLayout from '../components/layouts/storeLayout';
import Loadable from '@loadable/component';

const AboutComponent = Loadable(
  () => import('../components/about/aboutComponent'),
  {
    fallback: <Loading isCircular />,
  },
);

const IndexPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <StoreLayout>
      <SEO title="Deep Six Design" />
      <AboutComponent />
    </StoreLayout>
  );
};

export default IndexPage;
