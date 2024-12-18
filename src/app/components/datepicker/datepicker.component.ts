import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent {
  @Input() label: string = '';
}
