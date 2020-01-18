import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import SEO from '../components/seo';
import IndefiniteLoading from '../components/loading/indefiniteLoading';
import StoreLayout from '../components/layouts/storeLayout';
import Loadable from '@loadable/component';

const IndexComponent = Loadable(
  () => import('../components/index/indexComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const IndexPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <StoreLayout>
      <SEO title="Deep Six Design" />
      <IndexComponent />
    </StoreLayout>
  );
};

export default IndexPage;
