import React from 'react';
import { inject, observer } from 'mobx-react';

import IconButton from '@material-ui/core/IconButton';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';

const DarkPickerComponent = ({ store }) => {
  const { themeStore } = store;
  const { isDark } = themeStore;

  const handleClick = () => {
    themeStore.setIsDark(!isDark);
  };

  return (
    <>
      <IconButton aria-label="change color" onClick={handleClick}>
        <Brightness4OutlinedIcon />
      </IconButton>
    </>
  );
};

export default inject('store')(observer(DarkPickerComponent));
