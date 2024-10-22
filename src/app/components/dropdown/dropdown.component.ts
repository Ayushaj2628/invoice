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
  clients: string[] = ['Barry Cuda', 'Tressa Wexler'];
  projects: string[] = ['Office management', 'Project management'];
  taxs: string[] = ['Vat', 'Gst', 'No Tax'];
  selectedClient: string = '';
  @Input() label: string = 'Button';

  onClientChange(event: any): void {
    console.log('Selected client:', this.selectedClient);
  }
}
