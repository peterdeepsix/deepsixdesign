import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import LandscapeOutlinedIcon from '@material-ui/icons/LandscapeOutlined';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';

import Link from '../../Link';

const list = [
  {
    primaryText: 'Timeline',
    icon: <NaturePeopleOutlinedIcon />,
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
    <ListItem button to="/" component={Link} onClick={onClickItem}>
      <ListItemIcon>
        <ChangeHistoryIcon />
      </ListItemIcon>
      <ListItemText
        primary={'Loot Castle'}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem>
  </List>
);

export default NavContent;
