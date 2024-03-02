import { EmployeeService } from '../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) { }
  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      alert('Employee Created Successfully');
      this.goToEmployeeList();
    },
      error => console.log(error));
      alert('A error occured while creating employee');
  }

  onSubmit() {
    this.saveEmployee();
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
