import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';
import Loadable from '@loadable/component';

import SEO from '../components/seo';
import IndefiniteLoading from '../components/loading/indefiniteLoading';

const AboutComponent = Loadable(
  () => import('../components/about/aboutComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const AboutPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_about');
  }, []);
  return (
    <React.Fragment>
      <SEO title="Deep Six Design" />
      <AboutComponent />
    </React.Fragment>
  );
};

export default AboutPage;
