import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const DefaultLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
