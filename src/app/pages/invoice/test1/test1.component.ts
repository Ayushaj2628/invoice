import { Component } from '@angular/core';
import { TableComponent } from '../../../components/table/table.component';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.scss'
})
export class Test1Component {

  displayColumns = ['id','name','inovicedate','invoiceamount','status'];


   headers: Array<{ name: string, value: string, type: string }> = [
    { name: 'id', value: 'ID', type: 'number' },
    { name: 'name', value: 'Name', type: 'string' },
    { name: 'invoiceDate', value: 'Invoice Date', type: 'date' },
    { name: 'invoiceAmount', value: 'Invoice Amount', type: 'number' },
    { name: 'status', value: 'Status', type: 'status' },
  ];

  datas = [
    {
      id: 1,
      name: 'John Doe',
      invoiceDate: '01/05/2024',
      invoiceAmount: 2000,
      status: 'Partially Paid',
    },
    {
      id: 2,
      name: 'Jane Doe',
      invoiceDate: '05/06/2024',
      invoiceAmount: 2500,
      status: 'Paid',
    }
  ];
}
