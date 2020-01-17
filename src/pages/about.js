import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import SEO from '../components/seo';
import Loading from '../components/loading';

import Loadable from '@loadable/component';

const AboutComponent = Loadable(
  () => import('../components/about/aboutComponent'),
  {
    fallback: <Loading />,
  },
);

const AboutPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <React.Fragment>
      <SEO title="Deep Six Design" />
      <AboutComponent />
    </React.Fragment>
  );
};

export default AboutPage;
