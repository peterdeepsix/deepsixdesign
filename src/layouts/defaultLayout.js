import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
      <main>{childrenClone}</main>
    </>
  );
};

export default DefaultLayout;
