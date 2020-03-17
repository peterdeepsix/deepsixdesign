import React, { useContext } from 'react';
import Loadable from '@loadable/component';

import { makeStyles } from '@material-ui/core/styles';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const MainLayout = Loadable(() => import('src/layouts/mainLayout'), {
  fallback: <IndefiniteLoading message="MainLayout" />,
});

const ContactComponent = Loadable(
  () => import('src/components/contact/contactComponent'),
  {
    fallback: <IndefiniteLoading message="ContactComponent" />,
  },
);

const useStyles = makeStyles(theme => ({
  card: {},
}));

const ContactPage = ({ location }) => {
  const classes = useStyles();
  return (
    <>
      <ContactComponent />
    </>
  );
};

export default ContactPage;
