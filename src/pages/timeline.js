import React from 'react';
import { graphql } from 'gatsby';

import AppLayout from '../components/layouts/appLayout';
import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';

import Loadable from '@loadable/component';

const TimelineComponent = Loadable(
  () => import('../components/timeline/timelineComponent'),
  {
    fallback: <Loading />,
  },
);

export const query = graphql`
  query TimelinePageQuery {
    allProcesses {
      edges {
        node {
          title
          synonyms
          step
          definition
          id
        }
      }
    }
  }
`;

const Timeline = ({ data }) => {
  return (
    <AppLayout>
      <StoreLayout>
        <SEO title="Timeline" />
        <TimelineComponent data={data} />
      </StoreLayout>
    </AppLayout>
  );
};

export default Timeline;
