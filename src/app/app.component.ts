import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { IconButtonComponent } from "./components/icon-button/icon-button.component";
import { InputFieldComponent } from './components/input-field/input-field.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { DatepickerComponent } from "./components/datepicker/datepicker.component";
import { ActionbuttonComponent } from "./components/actionbutton/actionbutton.component";
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { CreateInvoiceComponent } from './pages/invoice/createpage/create-invoice.component';
import { TableComponent } from "./components/table/table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ButtonComponent, IconButtonComponent, InputFieldComponent, DropdownComponent, TextareaComponent, DatepickerComponent, ActionbuttonComponent, FloatingButtonComponent, CreateInvoiceComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
  isShowIcon = true;

  appClicked(value: string){
    alert(value);
  }

  appClicked1(value: string){
    alert('save');
  }

  appClicked2(value: string){
    alert('cancel');
  }


  iconClicked(value: number){
    alert('no Notification');
  }

  floating(value: string){
    alert('setting click')
  }

  //  headers = ['ID', 'Name', 'Invoice Amount'];
  //  datas = <any>[
  //   { id: 1, name: 'John Doe', invoiceAmount: 2000 },
  //   { id: 2, name: 'Jane Doe', invoiceAmount: 25000 },
  // ];
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
