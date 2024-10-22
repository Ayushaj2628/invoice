import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  @Input() label: string = '';
  @Input() placeholder: string = 'Enter value';
  @Input() value: string = '';

  @Output() valueChange = new EventEmitter<string>();

  onInputChange(value: string) {
    this.valueChange.emit(value);
  }
}
