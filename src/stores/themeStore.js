import { observable, action, decorate } from 'mobx';
import localStorage from 'mobx-localstorage';

class ThemeStore {
  color = { hex: '#FF1654' };

  getColor() {
    this.color = localStorage.getItem('color');
  }

  setColor(color) {
    console.log(color);
    this.color = color;
    localStorage.setItem('color', color);
  }

  dehydrate() {
    return {
      color: this.color,
    };
  }
}

decorate(ThemeStore, {
  color: observable,
  setColor: action,
  getColor: action,
});

export default ThemeStore;
