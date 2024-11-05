import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../../services/movie-data.service';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';   

@Component({
  selector: 'app-movie-search',
  standalone: true,    
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss'
})
export class MovieSearchComponent implements OnInit{

  movies: any[] = [];
  searchTitle: string = 'starwars';

  constructor(private MovieDataService: MovieDataService) {}

  ngOnInit(): void {
    this.getMovies(this.searchTitle);
  }

  getMovies(title: string): void {
    this.MovieDataService.searchMovies(title).subscribe(
      (response) => {
        if (response.Response === 'True') {
          this.movies = response.Search;
        } else {
          console.error('Error:', response.Error);
        }
      },
      (error) => {
        console.error('Network Error:', error);
      }
    );
  }
}
