import {Department} from 'src/app/Models/Department.model';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  formData: Department;
  readonly rootURL = 'http://localhost:49936/api';
  list : Department[];

  constructor(private http: HttpClient) { }

  GetDepartmentList(){
    this.http.get(this.rootURL + '/Departments')
    .toPromise()
    .then(res => this.list = res as Department[]);
  }
 
  CreateDepartment() {
    return this.http.post(this.rootURL + '/Departments', this.formData);
  }
  UpdateDepartment() {
    return this.http.put(this.rootURL + '/Departments/'+ this.formData.DepartmentId, this.formData);
  }
  DeleteDepartmentById(id) {
    return this.http.delete(this.rootURL + '/Departments/'+ id);
  }
}
