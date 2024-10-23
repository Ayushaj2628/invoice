import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() options: string[] = ['Option 1', 'Option 2'];
  @Input() label: string = 'Label';
  selectedClient: string = '';

  onClientChange(event: any): void {
    console.log('Selected client:', this.selectedClient);
  }
}
