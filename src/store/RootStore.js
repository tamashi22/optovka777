import { enableStaticRendering } from 'mobx-react-lite';
// import { CartStore } from "./modules/CartStore";
import { DevicesStore } from './modules/DevicesStore';
// import { DialogStore } from "./modules/DialogStore";
// import { AuthStore } from "./modules/AuthStore";

// there is no window object on the server
enableStaticRendering(typeof window === 'undefined');

export class RootStore {
  constructor() {
    this.devicesStore = new DevicesStore();
    // this.cartStore = new CartStore();
    // this.dialogStore = new DialogStore();
    // this.authStore = new AuthStore();
  }
}
