import React from 'react';
import Loadable from '@loadable/component';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import theme from 'src/configs/theme';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

import {
  Root,
  Header,
  Sidebar,
  Content,
  CollapseBtn,
  CollapseIcon,
  SidebarTrigger,
  SidebarTriggerIcon,
  Footer,
} from '@mui-treasury/layout';

const NavContent = Loadable(
  () => import('../app/components/NavContent'),
  {
    fallback: <IndefiniteLoading isCircular />,
  },
);
const NavHeader = Loadable(
  () => import('../app/components/NavHeader'),
  {
    fallback: <IndefiniteLoading isCircular />,
  },
);
const HeaderContent = Loadable(
  () => import('../app/components/HeaderContent'),
  {
    fallback: <IndefiniteLoading isCircular />,
  },
);
const FooterContent = Loadable(
  () => import('../app/components/FooterContent'),
  {
    fallback: <IndefiniteLoading isCircular />,
  },
);

const config = {
  autoCollapseDisabled: false,
  collapsedBreakpoint: 'sm',
  heightAdjustmentDisabled: false,
  xs: {
    sidebar: {
      anchor: 'left',
      hidden: false,
      inset: false,
      variant: 'temporary',
      width: 240,
      collapsible: false,
      collapsedWidth: 64,
    },
    header: {
      position: 'relative',
      clipped: true,
      offsetHeight: 56,
      persistentBehavior: 'flexible',
    },
    content: {
      persistentBehavior: 'flexible',
    },
    footer: {
      persistentBehavior: 'flexible',
    },
  },
  sm: {
    sidebar: {
      anchor: 'left',
      hidden: false,
      inset: false,
      variant: 'persistent',
      width: 256,
      collapsible: true,
      collapsedWidth: 64,
    },
    header: {
      position: 'relative',
      clipped: true,
      offsetHeight: 64,
      persistentBehavior: 'flexible',
    },
    content: {
      persistentBehavior: 'flexible',
    },
    footer: {
      persistentBehavior: 'flexible',
    },
  },
  md: {
    sidebar: {
      anchor: 'left',
      hidden: false,
      inset: false,
      variant: 'permanent',
      width: 256,
      collapsible: true,
      collapsedWidth: 64,
    },
    header: {
      position: 'relative',
      clipped: true,
      offsetHeight: 64,
      persistentBehavior: 'fit',
    },
    content: {
      persistentBehavior: 'fit',
    },
    footer: {
      persistentBehavior: 'fit',
    },
  },
};

const AppComponent = ({ children, location }) => (
  <Root theme={theme} config={config}>
    {({ headerStyles, sidebarStyles, collapsed, opened }) => (
      <>
        <CssBaseline />
        <Header>
          <Toolbar>
            <SidebarTrigger className={headerStyles.leftTrigger}>
              <SidebarTriggerIcon />
            </SidebarTrigger>
            <HeaderContent />
          </Toolbar>
        </Header>
        <Sidebar>
          <NavHeader collapsed={collapsed} />
          <div className={sidebarStyles.container}>
            <NavContent />
          </div>
          <CollapseBtn className={sidebarStyles.collapseBtn}>
            <CollapseIcon />
          </CollapseBtn>
        </Sidebar>
        <Content>{children}</Content>
        <Footer>
          <FooterContent />
        </Footer>
      </>
    )}
  </Root>
);

export default AppComponent;
