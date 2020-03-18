import React from 'react';
import { inject, observer } from 'mobx-react';
import Loadable from '@loadable/component';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

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
    fallback: <IndefiniteLoading message="NavContent" />,
  },
);
const NavHeader = Loadable(
  () => import('../app/components/NavHeader'),
  {
    fallback: <IndefiniteLoading message="NavHeader" />,
  },
);
const HeaderContent = Loadable(
  () => import('../app/components/HeaderContent'),
  {
    fallback: <IndefiniteLoading message="HeaderContent" />,
  },
);
const FooterContent = Loadable(
  () => import('../app/components/FooterContent'),
  {
    fallback: <IndefiniteLoading message="FooterContent" />,
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
      width: 320,
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
      width: 320,
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
      width: 320,
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

const AppComponent = ({ store, children, location }) => {
  const { themeStore } = store;
  const { color, isDark } = themeStore;

  const themeMemo = React.useMemo(
    theme =>
      createMuiTheme({
        palette: {
          type: isDark ? 'dark' : 'light',
          primary: {
            main: color.hex,
            contrastText: '#000',
          },
          secondary: {
            main: '#FF1654',
          },
          error: {
            main: red.A400,
          },
        },
        typography: {
          button: {
            textTransform: 'none',
          },
          overline: {
            textTransform: 'none',
          },
          fontFamily: [
            'Muli',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
      }),
    [isDark, color],
  );

  return (
    <Root theme={themeMemo} config={config}>
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
              <NavContent location={location} />
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
};

export default inject('store')(observer(AppComponent));
