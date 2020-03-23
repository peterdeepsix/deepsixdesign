import { observable, action, decorate } from 'mobx';
import localStorage from 'mobx-localstorage';

import { createMuiTheme } from '@material-ui/core/styles';

class ThemeStore {
  color = '#FF1654';
  prefersDarkMode = false;
  muiThemeObject = null;
  themeObject = {
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
  };

  getColor() {
    this.color = localStorage.getItem('color');
  }

  setColor(color) {
    this.color = color.hex;
    console.log(color.hex);
    localStorage.setItem('color', this.color);
  }

  getPrefersDarkMode() {
    this.prefersDarkMode = localStorage.getItem('prefersDarkMode');
  }

  setPrefersDarkMode(prefersDarkMode) {
    this.prefersDarkMode = prefersDarkMode;
    localStorage.setItem('prefersDarkMode', prefersDarkMode);
  }

  getThemeObject() {
    this.themeObject = localStorage.getItem('themeObject');
    console.log('GET theme object');
  }

  setThemeObject(themeObject) {
    this.themeObject = createMuiTheme(themeObject);
    localStorage.setItem('themeObject', themeObject);
  }

  getMuiThemeObject() {
    this.muiThemeObject = localStorage.getItem('muiThemeObject');
  }

  setMuiThemeObject(muiThemeObject) {
    this.muiThemeObject = muiThemeObject;
    localStorage.setItem('muiThemeObject', muiThemeObject);
  }

  dehydrate() {
    return {
      color: this.color,
      prefersDarkMode: this.prefersDarkMode,
      themeObject: this.themeObject,
      muiThemeObject: this.muiThemeObject,
    };
  }
}

decorate(ThemeStore, {
  color: observable,
  isDark: observable,
  themeObject: observable,
  muiThemeObject: observable,
  getThemeObject: action,
  setThemeObject: action,
  getMuiThemeObject: action,
  setMuiThemeObject: action,
  setColor: action,
});

export default ThemeStore;
