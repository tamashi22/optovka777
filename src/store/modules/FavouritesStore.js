import { makeAutoObservable } from 'mobx';

export class FavouriteStore {
  items = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.loadFavourites();
  }

  isBrowser() {
    return typeof window !== 'undefined';
  }

  loadFavourites() {
    if (!this.isBrowser()) return; // Skip loading if not in browser

    const savedCards = localStorage.getItem('favourites');
    if (savedCards) {
      this.items = JSON.parse(savedCards);
    }
  }

  saveFavourites() {
    if (!this.isBrowser()) return; // Skip saving if not in browser
    localStorage.setItem('favourites', JSON.stringify(this.items));
  }

  addFavourite(newCard) {
    const existingCard = this.items.find(card => card.slug === newCard.slug);
    if (!existingCard) {
      this.items.push(newCard);
      this.saveFavourites();
    }
  }

  removeBySlug(slug) {
    const index = this.items.findIndex(card => card.slug === slug);
    if (index > -1) {
      this.items.splice(index, 1);
      this.saveFavourites();
    }
  }
}
