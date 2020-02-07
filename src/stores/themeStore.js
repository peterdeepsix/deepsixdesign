import { observable, action, decorate } from 'mobx';
import localStorage from 'mobx-localstorage';

class ThemeStore {
  color = { hex: '#FF1654' };
  isDark = false;

  getColor() {
    this.color = localStorage.getItem('color');
  }

  getIsDark() {
    this.isDark = localStorage.getItem('isDark');
  }

  setColor(color) {
    this.color = color;
    localStorage.setItem('color', color);
  }

  setIsDark(prefersDarkMode) {
    this.isDark = prefersDarkMode;
    localStorage.setItem('isDark', prefersDarkMode);
  }

  dehydrate() {
    return {
      color: this.color,
      isDark: this.isDark,
    };
  }
}

decorate(ThemeStore, {
  color: observable,
  isDark: observable,
  setColor: action,
  getColor: action,
});

export default ThemeStore;
