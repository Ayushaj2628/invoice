import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login() {
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}