import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }
}
