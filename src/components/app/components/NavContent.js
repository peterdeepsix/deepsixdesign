import React from 'react';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import GavelOutlinedIcon from '@material-ui/icons/GavelOutlined';
import LandscapeOutlinedIcon from '@material-ui/icons/LandscapeOutlined';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import CameraOutlinedIcon from '@material-ui/icons/CameraOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import Link from '../../Link';

const list = [
  {
    primaryText: 'About',
    icon: <NaturePeopleOutlinedIcon />,
    to: '/about',
  },
  {
    primaryText: 'Timeline',
    icon: <TimelineOutlinedIcon />,
    to: '/timeline',
  },
  {
    primaryText: 'Render',
    icon: <CameraOutlinedIcon />,
    to: '/app',
  },

  {
    primaryText: 'Predictions',
    icon: <LandscapeOutlinedIcon />,
    to: '/predictions',
  },
  {
    primaryText: 'Gallery',
    icon: <ViewModuleIcon />,
    to: '/gallery',
  },
  {
    primaryText: 'Upload',
    icon: <CloudUploadOutlinedIcon />,
    to: '/media',
  },
  {
    primaryText: 'Camera',
    icon: <AddAPhotoOutlinedIcon />,
    to: '/camera',
  },
];

const NavContent = ({ onClickItem }) => (
  <List>
    <ListItem
      color="inherit"
      button
      to="/products"
      component={Link}
      onClick={onClickItem}
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
      to="/cart"
      component={Link}
      onClick={onClickItem}
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
        selected={i === 0}
        button
        to={to}
        component={Link}
        color="inherit"
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
      to="/terms"
      component={Link}
      onClick={onClickItem}
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
      to="/contact"
      component={Link}
      onClick={onClickItem}
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

export default NavContent;
