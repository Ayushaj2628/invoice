import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  standalone: true,
  imports: [],
  templateUrl: './floating-button.component.html',
  styleUrl: './floating-button.component.scss'
})
export class FloatingButtonComponent {

@Input() label: string = 'setting button'

@Output() floatingbuttonClickEvent = new EventEmitter<string>()

floatingbutton(){
  this.floatingbuttonClickEvent.emit(this.label)
}

}
