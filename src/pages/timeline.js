import React from 'react';
import { graphql } from 'gatsby';

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

const Timeline = ({ data }) => {
  return (
    <StoreLayout>
      <SEO title="Timeline - Deep Six Design" />
      <TimelineComponent data={data} />
    </StoreLayout>
  );
};

export default Timeline;
