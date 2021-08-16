import { makeAutoObservable, autorun, set, toJS } from 'mobx';

// eslint-disable-next-line
export function autoSave(_this: any, name: string) {
  const storedJson = localStorage.getItem(name);
  if (storedJson) {
    set(_this, JSON.parse(storedJson));
  }
  autorun(() => {
    const value = toJS(_this);
    localStorage.setItem(name, JSON.stringify(value));
  });
}
// window.localStorage.clear();
class Store {
  name: string = '';

  histoty: Array<number> = [];

  public accessToken: string;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.accessToken = '';
    autoSave(this, 'authStore');
  }

  getName(text: string) {
    this.name = text;
  }

  getHistoty(result: number) {
    this.histoty = this.histoty.concat(result);
  }
}

export default new Store();
