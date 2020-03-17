import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import LinkComponent from 'src/components/link/linkComponent';

import { WiTrain } from 'react-icons/wi';

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

const ChipComponent = ({
  to,
  value,
  variant,
  size,
  letter,
  label,
  icon,
}) => {
  const classes = useStyles();

  const handleClick = () => {
    console.info('clicked the chip');
  };

  console.log(`CHIP - to - ${to}`);
  console.log(`CHIP - value - ${value}`);

  return (
    <>
      {(value == to && (
        <Chip
          size={size}
          color="primary"
          variant={variant}
          avatar={<Avatar>{letter}</Avatar>}
          label={label}
          clickable
          onDelete={handleClick}
          deleteIcon={icon}
        />
      )) || (
        <Chip
          size={size}
          variant={variant}
          avatar={<Avatar>{letter}</Avatar>}
          label={label}
          clickable
          onDelete={handleClick}
          deleteIcon={icon}
        />
      )}
    </>
  );
};

export default ChipComponent;
