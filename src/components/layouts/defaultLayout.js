import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../layouts/header';
import Footer from '../layouts/footer';

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

  const childrenClone = React.Children.map(children, child => {
    return React.cloneElement(child, {
      location: location,
    });
  });

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{childrenClone}</main>
      <Footer siteTitle={data.sitePage.id} />
    </>
  );
};

export default DefaultLayout;
