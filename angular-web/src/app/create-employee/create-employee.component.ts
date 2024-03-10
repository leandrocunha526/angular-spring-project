import { EmployeeService } from '../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  formGroup: FormGroup;
  errorMessage: string = '';
  message: string = "";

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.message = 'Funcionário cadastrado com sucesso';
    },
      error => console.log(error));
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.saveEmployee();
    } else {
      this.errorMessage = "Por favor, insira todos os dados e todos os dados são obrigatórios";
    }
  }
}
