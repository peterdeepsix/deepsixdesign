import { observable, action, decorate } from 'mobx';
import localStorage from 'mobx-localstorage';

import { createMuiTheme } from '@material-ui/core/styles';

class ThemeStore {
  isDark = false;
  themeObject = createMuiTheme({
    palette: {
      primary: {
        main: '#ff5200',
      },
      secondary: {
        main: '#FF1654',
      },
      error: {
        main: '#ff5200',
      },
    },
    typography: {
      button: {
        textTransform: 'none',
      },
      overline: {
        textTransform: 'none',
      },
      fontFamily: [
        'Muli',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  getIsDark() {
    this.isDark = localStorage.getItem('isDark');
  }

  setIsDark(prefersDarkMode) {
    this.isDark = prefersDarkMode;
    localStorage.setItem('isDark', prefersDarkMode);
  }

  getThemeObject() {
    this.themeObject = localStorage.getItem('themeObject');
  }

  setThemeObject(themeObject) {
    this.themeObject = themeObject;
    localStorage.setItem('themeObject', themeObject);
  }

  dehydrate() {
    return {
      isDark: this.isDark,
      themeObject: this.themeObject,
    };
  }
}

decorate(ThemeStore, {
  isDark: observable,
  themeObject: observable,
  getThemeObject: action,
  setThemeObject: action,
});

export default ThemeStore;
