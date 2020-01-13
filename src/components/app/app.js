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

import NavContent from './components/NavContent';
import NavHeader from './components/NavHeader';
import HeaderContent from './components/HeaderContent';
import FooterContent from './components/FooterContent';
import ContentContent from './components/ContentContent';

const App = () => (
  <Root config={muiTreasuryPreset}>
    {({ headerStyles, sidebarStyles, collapsed }) => (
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
        <Content>
          <ContentContent />
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </>
    )}
  </Root>
);

export default App;
