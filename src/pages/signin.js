import React from 'react';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout'
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const SignInComponent = Loadable(
  () => import('src/components/signIn/SignInComponent'),
  {
    fallback: <IndefiniteLoading message='SignInComponent' />,
  },
);

const SignInPage = () => {
  return (
    <AppLayout>
      <SEO title="Deep Six Design" />
      <SignInComponent />
    </AppLayout>
  );
};

export default SignInPage;
