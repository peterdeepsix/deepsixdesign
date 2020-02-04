import React from 'react';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const HomeLayout = Loadable(() => import('src/layouts/homeLayout'), {
  fallback: <IndefiniteLoading message="HomeLayout" />,
});

const ContactComponent = Loadable(
  () => import('src/components/contact/contactComponent'),
  {
    fallback: <IndefiniteLoading message="ContactComponent" />,
  },
);

const ContactPage = () => {
  return (
    <HomeLayout>
      <ContactComponent />
    </HomeLayout>
  );
};

export default ContactPage;
