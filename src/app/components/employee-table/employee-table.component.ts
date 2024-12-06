import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss'
})
export class EmployeeTableComponent implements OnInit {
  employees: any[] = [];
  apiUrl: string = 'http://localhost:3000/api/employees';

  newEmployee = { name: '', age: null, position: '' }; // Form for creating a new employee
  selectedEmployee: any = null; // Holds the employee to update
  viewedEmployee: any = null; // Holds the employee to view

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }


  // Fetch all employees
  fetchEmployees(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      data => {
        this.employees = data;
      },
      error => {
        console.error('Error fetching employee data:', error);
      }
    );
  }

   // Create new employee
   createEmployee(): void {
    this.http.post(this.apiUrl, this.newEmployee).subscribe(
      () => {
        this.newEmployee = { name: '', age: null, position: '' };
        this.fetchEmployees();
      },
      error => {
        console.error('Error creating employee:', error);
      }
    );
  }


    // Update an employee
    updateEmployee(): void {
      if (this.selectedEmployee) {
        this.http.put(`${this.apiUrl}/${this.selectedEmployee.id}`, this.selectedEmployee).subscribe(
          () => {
            this.selectedEmployee = null;
            this.fetchEmployees();
          },
          error => {
            console.error('Error updating employee:', error);
          }
        );
      }
    }

     // Delete an employee
  deleteEmployee(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(
      () => {
        this.fetchEmployees();
      },
      error => {
        console.error('Error deleting employee:', error);
      }
    );
  }

    // View employee details by ID
    viewEmployee(id: number): void {
      this.http.get(`${this.apiUrl}/${id}`).subscribe(
        data => {
          this.viewedEmployee = data; 
        },
        error => {
          console.error('Error fetching employee data:', error);
        }
      );
    }

    
     // Select an employee for editing
  selectEmployeeForEdit(employee: any): void {
    this.selectedEmployee = { ...employee }; // Create a copy of the employee to edit
  }

}