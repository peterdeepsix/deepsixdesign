import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../layout/header';
import Footer from '../layout/footer';

const DefaultLayout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      sitePage {
        id
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer siteTitle={data.sitePage.id} />
    </>
  );
};

export default DefaultLayout;
