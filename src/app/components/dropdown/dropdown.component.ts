import { CommonModule } from '@angular/common';
import { Component, NgModule, } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  clients: string[] = ['Barry Cuda', 'Tressa Wexler'];
  selectedClient: string = '';

  onClientChange(event: any): void {
    console.log('Selected client:', this.selectedClient);
  }
}
