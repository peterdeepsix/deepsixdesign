import React, { useState } from 'react';

import { emphasize, makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import ChangeHistoryOutlinedIcon from '@material-ui/icons/ChangeHistoryOutlined';

import LinkComponent from 'src/components/link/linkComponent';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}));

const NavBreadCrumbs = props => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Chip
        variant="outlined"
        component={LinkComponent}
        to="/"
        label="D6d"
        icon={<ChangeHistoryOutlinedIcon fontSize="small" />}
      />
      <Chip
        variant="outlined"
        component={LinkComponent}
        to="/"
        label="About"
        icon={<NaturePeopleOutlinedIcon fontSize="small" />}
      />
    </Breadcrumbs>
  );
};

export default NavBreadCrumbs;
