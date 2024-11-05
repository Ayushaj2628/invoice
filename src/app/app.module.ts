import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { MovieDataService } from './services/movie-data.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    HttpClientModule  
  ],
  providers: [MovieDataService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
