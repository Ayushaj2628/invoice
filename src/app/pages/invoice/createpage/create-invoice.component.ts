import { Component,Input } from '@angular/core';
import { DatepickerComponent } from '../../../components/datepicker/datepicker.component';
import { TextareaComponent } from '../../../components/textarea/textarea.component';
import { DropdownComponent } from '../../../components/dropdown/dropdown.component';
import { InputFieldComponent } from '../../../components/input-field/input-field.component';

@Component({
  selector: 'app-create-invoice',
  standalone: true,
  imports: [DatepickerComponent,TextareaComponent,TextareaComponent,DropdownComponent,InputFieldComponent],
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.scss'
})
export class CreateInvoiceComponent {

  @Input() label: string = 'client';

  clients: string[] = ['Barry Cuda', 'Tressa Wexler'];
  projects: string[] = ['Office management', 'Project management'];
  taxs: string[] = ['Vat', 'Gst', 'No Tax'];

}
