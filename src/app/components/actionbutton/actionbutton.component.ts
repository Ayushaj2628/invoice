import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-actionbutton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actionbutton.component.html',
  styleUrl: './actionbutton.component.scss'
})
export class ActionbuttonComponent {
  isDropdownOpen = false;

  toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
  }

  onAction(action: string) {
      console.log(action);
      this.toggleDropdown(); // Close dropdown after action
  }
} 
