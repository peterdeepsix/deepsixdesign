import React from 'react';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
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
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';

import Link from '../../Link';

const list = [
  {
    primaryText: 'Timeline',
    icon: <TimelineOutlinedIcon />,
    to: '/timeline',
  },
  {
    primaryText: 'Camera',
    icon: <AddAPhotoOutlinedIcon />,
    to: '/camera',
  },
  {
    primaryText: 'Media',
    icon: <CloudUploadOutlinedIcon />,
    to: '/media',
  },
  {
    primaryText: 'Predictions',
    icon: <LandscapeOutlinedIcon />,
    to: '/predictions',
  },
  {
    primaryText: 'About',
    icon: <NaturePeopleOutlinedIcon />,
    to: '/about',
  },
  {
    primaryText: 'Blog',
    icon: <FeaturedPlayListOutlinedIcon />,
    to: '/blog',
  },
  {
    primaryText: 'Terms & Conditions',
    icon: <GavelOutlinedIcon />,
    to: '/terms',
  },
  {
    primaryText: 'Contact Us',
    icon: <ContactMailOutlinedIcon />,
    to: '/contact',
  },
];

const NavContent = ({ onClickItem }) => (
  <List>
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
      to="/"
      component={Link}
      onClick={onClickItem}
    >
      <ListItemIcon>
        <ChangeHistoryIcon />
      </ListItemIcon>
      <ListItemText
        primary={'Deep Six Design'}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem>
  </List>
);

export default NavContent;
