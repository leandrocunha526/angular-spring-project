import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  errorMessage: string = '';
  message: string = "";

  constructor(private employeeService: EmployeeService, private route: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
      this.message = `O funcionário ${id} foi deletado com sucesso`;
    }, error => console.log(error));
  }

  employeeDetails(id: number) {
    this.route.navigate(['employee-details', id]);
  }

  updateEmployee(id: number) {
    this.route.navigate(['update-employee', id]);
  }
}
