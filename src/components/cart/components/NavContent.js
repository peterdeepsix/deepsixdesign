import React from 'react';

import { useLayoutCtx } from '@mui-treasury/layout';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import LandscapeOutlinedIcon from '@material-ui/icons/LandscapeOutlined';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import AllInclusiveOutlinedIcon from '@material-ui/icons/AllInclusiveOutlined';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';
import AllInboxOutlinedIcon from '@material-ui/icons/AllInboxOutlined';
import ArtTrackOutlinedIcon from '@material-ui/icons/ArtTrackOutlined';

import Link from 'src/components/Link';

const NavContent = ({ location }) => {
  const { setOpened } = useLayoutCtx();

  const [selectedIndex, setSelectedIndex] = React.useState(
    (location && location.pathname) || '/',
  );

  return (
    <>
      <List
        subheader={<ListSubheader>Company Information</ListSubheader>}
      >
        <ListItem
          color="inherit"
          button
          component={Link}
          to="/"
          selected={selectedIndex === '/'}
          onClick={() => setOpened(false)}
        >
          <ListItemIcon>
            <ChangeHistoryIcon />
          </ListItemIcon>
          <ListItemText
            primary={'Deep Six Design'}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
        <ListItem
          color="inherit"
          button
          component={Link}
          to="/about"
          selected={selectedIndex === '/about'}
          onClick={() => setOpened(false)}
        >
          <ListItemIcon>
            <NaturePeopleOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary={'About'}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
        <ListItem
          color="inherit"
          button
          component={Link}
          to="/contact"
          selected={selectedIndex === '/contact'}
          onClick={() => setOpened(false)}
        >
          <ListItemIcon>
            <ContactMailOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary={'Contact'}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
        <ListItem
          color="inherit"
          button
          component={Link}
          to="/dependencies"
          selected={selectedIndex === '/dependencies'}
          onClick={() => setOpened(false)}
        >
          <ListItemIcon>
            <AllInboxOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary={'Dependencies'}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      </List>
      <Divider style={{ margin: '12px 0' }} />
      <List subheader={<ListSubheader>Commerce Store</ListSubheader>}>
        <ListItem
          color="inherit"
          button
          to="/products"
          component={Link}
          selected={selectedIndex === '/products'}
          onClick={() => setOpened(false)}
        >
          <ListItemIcon>
            <ArtTrackOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary={'Products'}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
        <ListItem
          color="inherit"
          button
          component={Link}
          to="/cart"
          selected={selectedIndex === '/cart'}
          onClick={() => setOpened(false)}
        >
          <ListItemIcon>
            <ShoppingCartOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary={'Shopping Cart'}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      </List>
    </>
  );
};

export default NavContent;
