import React, { useState } from 'react';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import GavelOutlinedIcon from '@material-ui/icons/GavelOutlined';
import LandscapeOutlinedIcon from '@material-ui/icons/LandscapeOutlined';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import AllInclusiveOutlinedIcon from '@material-ui/icons/AllInclusiveOutlined';

import Link from '../../Link';

const list = [
  {
    primaryText: 'Timeline',
    icon: <TimelineOutlinedIcon />,
    to: '/timeline',
  },
  {
    primaryText: 'Predictions',
    icon: <LandscapeOutlinedIcon />,
    to: '/predictions',
  },
  {
    primaryText: 'Gallery',
    icon: <ViewModuleOutlinedIcon />,
    to: '/gallery',
  },
  {
    primaryText: 'Stream',
    icon: <AllInclusiveOutlinedIcon />,
    to: '/stream',
  },
];

const NavContent = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <List>
      <ListItem
        color="inherit"
        button
        component={Link}
        to="/about"
        selected={selectedIndex === 0}
        onClick={event => handleListItemClick(event, 0)}
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
        to="/products"
        component={Link}
        selected={selectedIndex === 1}
        onClick={event => handleListItemClick(event, 1)}
      >
        <ListItemIcon>
          <ChangeHistoryIcon />
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
        selected={selectedIndex === 2}
        onClick={event => handleListItemClick(event, 2)}
      >
        <ListItemIcon>
          <ShoppingCartOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary={'Shopping Cart'}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
      <Divider style={{ margin: '12px 0' }} />
      {list.map(({ to, primaryText, icon }, i) => (
        <ListItem
          key={primaryText}
          color="inherit"
          button
          component={Link}
          to={to}
          selected={selectedIndex === 3 + i}
          onClick={event => handleListItemClick(event, 3 + i)}
        >
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
          <ListItemText
            primary={primaryText}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      ))}
      <Divider style={{ margin: '12px 0' }} />
      <ListItem
        color="inherit"
        button
        component={Link}
        to="/terms"
        selected={selectedIndex === 9}
        onClick={event => handleListItemClick(event, 9)}
      >
        <ListItemIcon>
          <GavelOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary={'Terms'}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
      <ListItem
        color="inherit"
        button
        component={Link}
        to="/contact"
        selected={selectedIndex === 10}
        onClick={event => handleListItemClick(event, 10)}
      >
        <ListItemIcon>
          <ContactMailOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary={'Contact'}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
    </List>
  );
};

export default NavContent;
