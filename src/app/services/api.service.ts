import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Ensures this service is available app-wide
})
export class ApiService {
  private baseUrl = 'http://localhost:3000'; // Node.js backend URL

  constructor(private http: HttpClient) {}

  // Example: Get all items
  getItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/items`);
  }

  // Example: Get a single item by ID
  getItemById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/items/${id}`);
  }

  // Example: Add a new item
  addItem(item: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/items`, item);
  }

  // Example: Update an item
  updateItem(id: string, item: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/items/${id}`, item);
  }

  // Example: Delete an item
  deleteItem(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/items/${id}`);
  }
}
