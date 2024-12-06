import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login();
    alert('Logged in successfully');
  }

  logout() {
    this.authService.logout();
    alert('Logged out successfully');
  }

}
