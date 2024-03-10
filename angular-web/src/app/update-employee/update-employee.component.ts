import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee = new Employee();
  formGroup: FormGroup;
  message: string = "";
  errorMessage: string = "";

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
    });
}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.employeeService.updateEmployee(this.id, this.employee).subscribe(
        (data) => {
          this.message = `Funcionário ${this.id} foi atualizado com sucesso`;
        },
        (error) => console.log(error)
      );
    } else {
      this.errorMessage = "Por favor, insira todos os dados e todos os dados são obrigatórios";
    }
  }
}
