import React from 'react';
import { graphql } from 'gatsby';
import { useFirebase } from 'gatsby-plugin-firebase';

import AppLayout from '../components/layouts/appLayout';
import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';

import Loadable from '@loadable/component';

const GalleryComponent = Loadable(
  () => import('../components/gallery/galleryComponent'),
  {
    fallback: <Loading />,
  },
);

// export const query = graphql`
//   query TimelinePageQuery {
//     allProcesses(sort: { fields: step }) {
//       edges {
//         node {
//           id
//           slug
//           title
//           step
//           definition
//           synonyms
//         }
//       }
//     }
//   }
// `;

const IndexPage = ({ data }) => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <AppLayout>
      <StoreLayout>
        <SEO title="Gallery" />
        asd
      </StoreLayout>
    </AppLayout>
  );
};

export default IndexPage;
