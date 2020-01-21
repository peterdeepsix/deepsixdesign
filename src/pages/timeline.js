import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const TimelineComponent = Loadable(
  () => import('src/components/timeline/timelineComponent'),
  {
    fallback: <IndefiniteLoading />,
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
    <>
      <SEO title="Timeline - Deep Six Design" />
      <TimelineComponent data={data} />
    </>
  );
};

export default TimelinePage;
