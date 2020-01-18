import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import IndefiniteLoading from '../components/loading/indefiniteLoading';

import Loadable from '@loadable/component';

const StreamComponent = Loadable(
  () => import('../components/stream/streamComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const StreamPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_stream');
  }, []);
  return (
    <StoreLayout>
      <SEO title="Predictions" />
      <StreamComponent />
    </StoreLayout>
  );
};

export default StreamPage;
