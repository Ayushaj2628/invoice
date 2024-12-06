import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.scss'
})
export class EmployeeCreateComponent {

  newEmployee = { name: '', age: null, position: '' };
  apiUrl: string = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient, private router: Router) {}

  createEmployee(): void {
    this.http.post(this.apiUrl, this.newEmployee).subscribe(
      () => {
        alert('Employee created successfully!');
        this.router.navigate(['/employees']); // Navigate back to the table
      },
      (error) => {
        console.error('Error creating employee:', error);
      }
    );
  }

}
