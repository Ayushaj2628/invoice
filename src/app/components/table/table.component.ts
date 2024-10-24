import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
    @Input() headers: Array<{ name: string, value: string, type: string }> = [];
  @Input() datas = <any>[];
 @Input() displayColumns = <any> [];


 getStatusClass(status: string) {
  switch (status) {
    case 'Paid':
      return 'text-success';  // Apply green text for 'Paid'
    case 'Partially Paid':
      return 'text-warning';  // Apply yellow text for 'Partially Paid'
    default:
      return '';
  }
}

 // headers = ['ID', 'Name', 'Age', 'Position'];
  // datas = <any>[
  //   { id: 1, name: 'John Doe', age: 25, position: 'Developer' },
  //   { id: 2, name: 'Jane Doe', age: 30, position: 'Manager' },
  //   { id: 3, name: 'Will Smith', age: 28, position: 'Designer' }
  // ];
  // displayColumns = ['id', 'name', 'age', 'position'];
}
