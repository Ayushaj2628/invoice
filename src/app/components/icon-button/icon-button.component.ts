import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {

  @Input() count: number = 0;


  @Output() IconClickEvent = new EventEmitter<number>();


  iconClickEvent() {
   
    this.IconClickEvent.emit(this.count);
  }

}
