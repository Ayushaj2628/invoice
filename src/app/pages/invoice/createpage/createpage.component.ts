import { Component,Input } from '@angular/core';
import { DatepickerComponent } from '../../../components/datepicker/datepicker.component';
import { TextareaComponent } from '../../../components/textarea/textarea.component';
import { DropdownComponent } from '../../../components/dropdown/dropdown.component';
import { InputFieldComponent } from '../../../components/input-field/input-field.component';

@Component({
  selector: 'app-createpage',
  standalone: true,
  imports: [DatepickerComponent,TextareaComponent,TextareaComponent,DropdownComponent,InputFieldComponent],
  templateUrl: './createpage.component.html',
  styleUrl: './createpage.component.scss'
})
export class CreatepageComponent {

  @Input() label: string = 'client';

}
