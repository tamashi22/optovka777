import { enableStaticRendering } from 'mobx-react-lite';
import { CardStore } from './modules/CardStore';
import { DevicesStore } from './modules/DevicesStore';
// import { DialogStore } from "./modules/DialogStore";
import { FavouriteStore } from './modules/FavouritesStore';
import { AuthStore } from './modules/AuthStore';

// there is no window object on the server
enableStaticRendering(typeof window === 'undefined');

export class RootStore {
  constructor() {
    this.favouriteStore = new FavouriteStore();
    this.devicesStore = new DevicesStore();
    this.cardStore = new CardStore();
    // this.dialogStore = new DialogStore();
    this.authStore = new AuthStore();
  }
}
