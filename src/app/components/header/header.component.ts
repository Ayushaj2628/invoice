import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreateInvoiceComponent } from '../../pages/invoice/createpage/create-invoice.component';
import { Test1Component } from '../../pages/invoice/test1/test1.component';
import { Test2Component } from '../../pages/invoice/test2/test2.component';
import { Test3Component } from '../../pages/invoice/test3/test3.component';
import { MovieSearchComponent } from '../../pages/movie-search/movie-search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CreateInvoiceComponent,Test1Component,Test2Component,Test3Component,MovieSearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
