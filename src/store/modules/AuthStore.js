import { parseCookies } from 'nookies';
import { makeAutoObservable } from 'mobx';
import { jwtDecode } from 'jwt-decode'; // Corrected import statement

export class AuthStore {
  isLoggedin = false;
  user = {};
  token = {};

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.checkToken();
  }

  checkToken() {
    const cookies = parseCookies();
    this.token = this.parseToken(cookies.token);

    if (this.token) {
      this.isLoggedin = true;
      this.extractUserFromToken(this.token);
    } else {
      this.isLoggedin = false;
      this.user = {};
    }
  }

  parseToken(token) {
    try {
      return JSON.parse(token);
    } catch (e) {
      console.error('Error parsing token:', e);
      return null;
    }
  }

  extractUserFromToken(token) {
    try {
      const decoded = jwtDecode(token.access_token);
      this.user = decoded;
    } catch (e) {
      console.error('Error decoding token:', e);
      this.user = {};
    }
  }
}
