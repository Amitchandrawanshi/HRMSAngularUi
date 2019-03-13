import {Employee} from 'src/app/Models/employee.model';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  readonly rootURL = 'http://localhost:49936/api';
  list : Employee[];

  constructor(private http: HttpClient) { }

  GetEmployeeList(){
    this.http.get(this.rootURL + '/employees')
    .toPromise()
    .then(res => this.list = res as Employee[]);
  }
 
  CreateEmployee() {
    return this.http.post(this.rootURL + '/employees', this.formData);
  }
  UpdateEmployee() {
    return this.http.put(this.rootURL + '/employees/'+ this.formData.EmployeeId, this.formData);
  }
  DeleteEmployeeById(id) {
    return this.http.delete(this.rootURL + '/employees/'+ id);
  }
}
