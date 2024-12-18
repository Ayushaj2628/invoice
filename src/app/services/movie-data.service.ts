import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  private apiKey = 'ae34e0f0';
  private apiUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    const url = `${this.apiUrl}?s=${title}&apikey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
