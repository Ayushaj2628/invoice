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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ButtonComponent, IconButtonComponent, InputFieldComponent, DropdownComponent, TextareaComponent, DatepickerComponent, ActionbuttonComponent, FloatingButtonComponent],
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

}
