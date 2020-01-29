import React from 'react';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout';
import StoreLayout from 'src/layouts/storeLayout';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const AccountComponent = Loadable(
  () => import('src/components/account/accountComponent'),
  {
    fallback: <IndefiniteLoading message="AccountComponent" />,
  },
);

const AccountPage = () => {
  return (
    <StoreLayout>
      <AppLayout>
        <SEO title="Deep Six Design - Account" />
        <AccountComponent />
      </AppLayout>
    </StoreLayout>
  );
};

export default AccountPage;
