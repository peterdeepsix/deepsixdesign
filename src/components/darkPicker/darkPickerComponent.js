import React from 'react';
import { inject, observer } from 'mobx-react';

import Button from '@material-ui/core/Button';
import { GiNightSky } from 'react-icons/gi';

const DarkPickerComponent = ({ store }) => {
  const { themeStore } = store;
  const { isDark } = themeStore;

  const handleClick = () => {
    console.log('SET THEME TO - DARK');
    themeStore.setIsDark(!isDark);
  };

  return (
    <Button
      onClick={handleClick}
      aria-label="change color"
      variant="outlined"
      startIcon={<GiNightSky />}
    >
      Night Mode
    </Button>
  );
};

export default inject('store')(observer(DarkPickerComponent));
