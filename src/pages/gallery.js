import React from 'react';
import { Router } from '@reach/router';
import Loadable from '@loadable/component';
import { makeStyles } from '@material-ui/core/styles';

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

const GalleryComponent = Loadable(
  () => import('src/components/gallery/galleryComponent'),
  {
    fallback: <IndefiniteLoading message="GalleryComponent" />,
  },
);

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const GalleryPage = ({ location }) => {
  const classes = useStyles();
  return (
    <AppLayout location={location}>
      <SEO title="Gallery - Deep Six Design" />
      <Router>
        <PrivateRouteComponent
          path="/gallery"
          component={GalleryComponent}
        />
        <LoginComponent path="/signin" />
      </Router>
    </AppLayout>
  );
};

export default GalleryPage;
