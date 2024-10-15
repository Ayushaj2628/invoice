import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { IconButtonComponent } from "./components/icon-button/icon-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ButtonComponent, IconButtonComponent],
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

}
