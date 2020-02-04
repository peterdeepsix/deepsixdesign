import React from 'react';
import Loadable from '@loadable/component';
import { graphql } from 'gatsby';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const TimelineComponent = Loadable(
  () => import('src/components/timeline/timelineComponent'),
  {
    fallback: <IndefiniteLoading message="TimelineComponent" />,
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
      <TimelineComponent data={data} />
    </>
  );
};

export default TimelinePage;
