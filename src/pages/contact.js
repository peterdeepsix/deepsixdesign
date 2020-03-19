import React, { useContext } from 'react';
import Loadable from '@loadable/component';

import { makeStyles } from '@material-ui/core/styles';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const InterfaceLayout = Loadable(
  () => import('src/layouts/InterfaceLayout'),
  {
    fallback: <IndefiniteLoading message="InterfaceLayout" />,
  },
);

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
      <InterfaceLayout location={location}>
        <ContactComponent />
      </InterfaceLayout>
    </>
  );
};

export default ContactPage;
