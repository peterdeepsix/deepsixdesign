import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout'
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const TimelineComponent = Loadable(
  () => import('src/components/timeline/timelineComponent'),
  {
    fallback: <IndefiniteLoading message='TimelineComponent' />,
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
  return (
    <AppLayout>
      <SEO title="Timeline - Deep Six Design" />
      <TimelineComponent data={data} />
    </AppLayout>
  );
};

export default TimelinePage;
