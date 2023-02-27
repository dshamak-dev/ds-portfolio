import { makeAutoObservable } from "mobx";
import { THEME_TYPE } from "../constants/themes.const";

class AppStore {
  pageTheme: THEME_TYPE = "dark";

  constructor() {
    this.clear();

    makeAutoObservable(this);
  }

  clear() {
    this.pageTheme = "dark";
  }

  setPageTheme(theme: THEME_TYPE) {
    this.pageTheme = theme;
  }
}

export const appStore = new AppStore();
