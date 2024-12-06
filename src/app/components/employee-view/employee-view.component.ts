import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-view',
  standalone: true,
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {
  employeeId: number | null = null;
  employee: any = null;
  apiUrl: string = 'http://localhost:3000/api/employees';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

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
      this.http.get(`${this.apiUrl}/${this.employeeId}`).subscribe(
        (data) => {
          this.employee = data;
        },
        (error) => {
          console.error('Error fetching employee details:', error);
        }
      );
    }
  }
}
