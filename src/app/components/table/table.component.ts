import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Invoice {
  invoiceNumber: string;
  client: string;
  createdDate: Date;
  dueDate: Date;
  amount: number;
  status: 'Paid' | 'Sent' | 'Partially Paid';
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  invoices: Invoice[] = [
    {
      invoiceNumber: '#INV-0001',
      client: 'Global Technologies',
      createdDate: new Date('2019-03-11'),
      dueDate: new Date('2019-03-17'),
      amount: 2099,
      status: 'Paid'
    },
    {
      invoiceNumber: '#INV-0002',
      client: 'Delta Infotech',
      createdDate: new Date('2019-03-11'),
      dueDate: new Date('2019-03-17'),
      amount: 2099,
      status: 'Sent'
    },
    {
      invoiceNumber: '#INV-0003',
      client: 'Cream Inc',
      createdDate: new Date('2019-03-11'),
      dueDate: new Date('2019-03-17'),
      amount: 2099,
      status: 'Partially Paid'
    }
  ];

  getStatusClass(status: string) {
    return {
      'paid': status === 'Paid',
      'sent': status === 'Sent',
      'partially-paid': status === 'Partially Paid'
    };
  }

  onActionClick(invoice: Invoice) {
    console.log('Action clicked for:', invoice);
  }
}
