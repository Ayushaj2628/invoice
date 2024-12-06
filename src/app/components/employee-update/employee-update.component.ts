import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-update',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.scss'
})
export class EmployeeUpdateComponent implements OnInit {
  employee: any = { name: '', age: null, position: '' };
  apiUrl: string = 'http://localhost:3000/api/employees';
  employeeId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.employeeId = +id;
        this.fetchEmployeeDetails();
      }
    });
  }

  fetchEmployeeDetails(): void {
    if (this.employeeId) {
      this.http.get(`${this.apiUrl}/${this.employee}`).subscribe(
       (data) => {
          this.employee = data;
        },
        (error) => {
          console.error('Error fetching employee details:', error);
        }
      );
    }
  }

  updateEmployee(): void {
    if (this.employeeId) {
      this.http.put(`${this.apiUrl}/${this.employeeId}`, this.employee()).subscribe(
        () => {
          alert('Employee updated successfully!');
          this.router.navigate(['employees']);
        },
        (error) => {
          console.error('Error updating employee:', error);
        }
      );
    }
  }
}
