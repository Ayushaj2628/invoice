import { Routes } from '@angular/router';
import { CreateInvoiceComponent } from './pages/invoice/createpage/create-invoice.component';
import { Test1Component } from './pages/invoice/test1/test1.component';
import { Test2Component } from './pages/invoice/test2/test2.component';
import { Test3Component } from './pages/invoice/test3/test3.component';
import { ButtonComponent } from './components/button/button.component';
import { MovieSearchComponent } from './pages/movie-search/movie-search.component';

export const routes: Routes = [
   {
    path: "",
    component: ButtonComponent
   },
   {
    path: "create-invoice",
    component: CreateInvoiceComponent
   },
   {
      path: "test1",
      component: Test1Component
   },
   {
      path: "test2",
      component: Test2Component
   },
   {
      path: "test3",
      component: Test3Component
   },
   {
      path: "text2/:id",
      component: Test2Component
   },
   {
      path: "movie-search",
      component: MovieSearchComponent
   },
];
