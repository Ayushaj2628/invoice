import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';


@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {

  @Input() count: number = 0;

}
