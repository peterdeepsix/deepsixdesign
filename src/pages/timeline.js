import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';

import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';

const TimelineComponent = Loadable(
  () => import('../components/timeline/timelineComponent'),
  {
    fallback: <Loading />,
  },
);

export const query = graphql`
  query TimelinePageQuery {
    allProcesses(sort: { fields: step }) {
      edges {
        node {
          id
          slug
          title
          step
          definition
          synonyms
        }
      }
    }
  }
`;

const TimelinePage = ({ data }) => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_timeline');
  }, []);
  return (
    <StoreLayout>
      <SEO title="Timeline - Deep Six Design" />
      <TimelineComponent data={data} />
    </StoreLayout>
  );
};

export default TimelinePage;
