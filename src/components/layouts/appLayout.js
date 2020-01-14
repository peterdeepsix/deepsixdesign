import React from 'react';
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

import NavContent from '../app/components/NavContent';
import NavHeader from '../app/components/NavHeader';
import HeaderContent from '../app/components/HeaderContent';
import FooterContent from '../app/components/FooterContent';

const AppLayout = ({ children }) => {
  return (
    <>
      <main>
        <Root config={muiTreasuryPreset}>
          {({ headerStyles, sidebarStyles, collapsed }) => (
            <>
              <CssBaseline />
              <Header>
                <Toolbar>
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
