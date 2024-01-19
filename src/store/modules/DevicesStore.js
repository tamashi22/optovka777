import { makeAutoObservable } from 'mobx';

const MOBILE_WIDTH = 768;

export class DevicesStore {
  isMobile = false;
  width = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setWidth(width) {
    this.width = width;
    this.isMobile = MOBILE_WIDTH >= width;
  }
}
