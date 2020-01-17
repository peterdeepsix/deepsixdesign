import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Toolbar from '@material-ui/core/Toolbar';
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
  muiTreasuryPreset,
} from '@mui-treasury/layout';

import theme from '../../configs/theme';
import Loading from '../loading';

import Loadable from '@loadable/component';

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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {},
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

const AppLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <main>
        <Root theme={theme} config={muiTreasuryPreset}>
          {({ headerStyles, sidebarStyles, collapsed }) => (
            <>
              <CssBaseline />
              <Header>
                <Toolbar className={classes.toolbar}>
                  <SidebarTrigger
                    className={headerStyles.leftTrigger}
                  >
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
      </main>
    </>
  );
};

export default AppLayout;
