import { observable, action, decorate } from 'mobx';
import localStorage from 'mobx-localstorage';

import { createMuiTheme } from '@material-ui/core/styles';

class ThemeStore {
  color = '#FF1654';
  isDark = false;
  themeObject = createMuiTheme({
    palette: {
      primary: {
        main: '#FF1654',
      },
      secondary: {
        main: '#FF1654',
      },
      error: {
        main: '#FF1654',
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

  getColor() {
    this.color = localStorage.getItem('color');
  }

  setColor(color) {
    this.color = color.hex;
    console.log(color.hex);
    localStorage.setItem('color', this.color);
  }

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
      color: this.color,
      isDark: this.isDark,
      themeObject: this.themeObject,
    };
  }
}

decorate(ThemeStore, {
  color: observable,
  isDark: observable,
  themeObject: observable,
  getThemeObject: action,
  setThemeObject: action,
  setColor: action,
});

export default ThemeStore;
