import React from 'react';

import AppLayout from '../components/layouts/appLayout';
import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';

import Loadable from '@loadable/component';

const TimelineComponent = Loadable(
  () => import('../components/timelineComponent'),
  {
    fallback: <Loading />,
  },
);

const Timeline = () => {
  return (
    <AppLayout>
      <StoreLayout>
        <SEO title="Timeline" />
        <TimelineComponent />
      </StoreLayout>
    </AppLayout>
  );
};

export default Timeline;
