import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const HelmetLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const childrenClone = React.Children.map(children, child => {
    return React.cloneElement(child, {
      siteData: data,
    });
  });

  return (
    <main>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      {childrenClone}
    </main>
  );
};

export default HelmetLayout;
