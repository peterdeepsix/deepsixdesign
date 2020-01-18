import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../configs/theme';

import {
  Root,
  Header,
  Sidebar,
  Content,
  Footer,
  CollapseBtn,
  CollapseIcon,
  SidebarTrigger,
  SidebarTriggerIcon,
} from '@mui-treasury/layout';

import Loadable from '@loadable/component';
import Loading from '../loading';

const NavContent = Loadable(
  () => import('../app/components/NavContent'),
  {
    fallback: <Loading isCircular />,
  },
);
const NavHeader = Loadable(
  () => import('../app/components/NavHeader'),
  {
    fallback: <Loading isCircular />,
  },
);
const HeaderContent = Loadable(
  () => import('../app/components/HeaderContent'),
  {
    fallback: <Loading isCircular />,
  },
);
const FooterContent = Loadable(
  () => import('../app/components/FooterContent'),
  {
    fallback: <Loading isCircular />,
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
      variant: 'permanent',
      width: 256,
      collapsible: false,
      collapsedWidth: 64,
    },
    header: {
      position: 'relative',
      clipped: false,
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
      clipped: false,
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

const AppComponent = ({ children, location, ...props }) => (
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
        {/* <Footer></Footer> */}
        <FooterContent />
      </>
    )}
  </Root>
);

export default AppComponent;
