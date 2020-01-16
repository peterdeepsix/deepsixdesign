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

import NavContent from '../app/components/NavContent';
import NavHeader from '../app/components/NavHeader';
import HeaderContent from '../app/components/HeaderContent';
import FooterContent from '../app/components/FooterContent';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    // minHeight: 128,
    // alignItems: 'flex-start',
    // paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(2),
  },
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
