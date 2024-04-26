import { makeAutoObservable } from 'mobx';

export class CardStore {
  cards = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.loadCards();
  }

  isBrowser() {
    return typeof window !== 'undefined';
  }

  loadCards() {
    if (!this.isBrowser()) return; // Skip loading if not in browser

    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      this.cards = JSON.parse(savedCards);
    }
  }

  saveCards() {
    if (!this.isBrowser()) return; // Skip saving if not in browser

    localStorage.setItem('cards', JSON.stringify(this.cards));
  }

  addCard(newCard) {
    const existingCard = this.cards.find(card => card.slug === newCard.slug);
    if (!existingCard) {
      const cardToAdd = { ...newCard, quantity: 1 };
      this.cards.push(cardToAdd);

      this.saveCards();
    }
  }

  removeCardBySlug(slug) {
    const index = this.cards.findIndex(card => card.slug === slug);
    if (index > -1) {
      this.cards.splice(index, 1);
      this.saveCards();
    }
  }

  updateQuantity(item, quantity) {
    console.log(quantity);
    const index = this.cards.findIndex(card => card.slug === item.slug);
    if (index > -1) {
      this.cards[index].quantity = quantity;
      this.saveCards();
    }
  }

  increment(item) {
    const index = this.cards.findIndex(card => card.slug === item.slug);
    if (index > -1) {
      this.cards[index].quantity += 1; // Increment the quantity
      this.saveCards();
    }
  }

  decrement(item) {
    const index = this.cards.findIndex(card => card.slug === item.slug);
    if (index > -1) {
      if (this.cards[index].quantity > 0) {
        // Ensure quantity doesn't go below 0
        this.cards[index].quantity -= 1; // Decrement the quantity
        this.saveCards();
      }
    }
  }
}
