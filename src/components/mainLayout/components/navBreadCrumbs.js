import React, { useState } from 'react';

import { emphasize, makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';

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

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const NavBreadCrumbs = props => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Chip
        variant="outlined"
        component={LinkComponent}
        to="/"
        label="Products"
        icon={<StoreOutlinedIcon fontSize="small" />}
        onClick={handleClick}
      />
      <Chip
        variant="outlined"
        component={LinkComponent}
        to="/"
        label="Google Time"
        onClick={handleClick}
      />
    </Breadcrumbs>
  );
};

export default NavBreadCrumbs;
