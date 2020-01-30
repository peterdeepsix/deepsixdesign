import React from 'react';
import { Router } from '@reach/router';
import Loadable from '@loadable/component';
import { graphql } from 'gatsby';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';
import PrivateRouteComponent from 'src/components/privateRoute/privateRouteComponent';

const LoginComponent = Loadable(
  () => import('src/components/login/logInComponent'),
  {
    fallback: <IndefiniteLoading message="LoginComponent" />,
  },
);

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
    <AppLayout>
      <SEO title="Timeline - Deep Six Design" />
      <Router>
        <PrivateRouteComponent
          path="//timeline"
          component={TimelineComponent}
          data={data}
        />
        <LoginComponent path="/signin" />
      </Router>
    </AppLayout>
  );
};

export default TimelinePage;
