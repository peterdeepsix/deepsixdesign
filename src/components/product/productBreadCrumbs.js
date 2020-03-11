import React, { useState } from 'react';

import { emphasize, makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import ChangeHistoryOutlinedIcon from '@material-ui/icons/ChangeHistoryOutlined';

import LinkComponent from 'src/components/link/linkComponent';

import { GiDuck } from 'react-icons/gi';

const useStyles = makeStyles(theme => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const ProductBreadCrumbs = ({ productSlug, productName }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Chip
        component={LinkComponent}
        to="/products"
        avatar={<Avatar>P</Avatar>}
        label="Raw"
        clickable
        onDelete={handleDelete}
        deleteIcon={<GiDuck />}
      />
      <LinkComponent
        component={LinkComponent}
        to={`/buy/${productSlug}`}
      >
        {productName}
      </LinkComponent>
    </Breadcrumbs>
  );
};

export default ProductBreadCrumbs;
