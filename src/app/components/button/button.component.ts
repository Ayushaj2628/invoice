import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() isShowIcon: boolean = true;
  @Input() label: string = 'Button';
  @Input() type: 'primary' | 'secondary' | 'cancel' = 'primary';

  @Output() buttonClickEvent = new EventEmitter<string>();

  constructor() {
    this.abc();
  }

  abc() {
    this.isShowIcon = false;
    let a = 10;
    a = 2;
  }

  buttonCompClick() {
   
    this.buttonClickEvent.emit(this.label);
  }
}
