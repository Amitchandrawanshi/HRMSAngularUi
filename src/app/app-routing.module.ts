import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employees/employee/create-employee/create-employee.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CreateDepartmentComponent } from './Departments/Department/create-department/create-department.component';
import { DepartmentListComponent } from './Departments/department-list/department-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeesComponent },
  { path: 'createemployee', component: CreateEmployeeComponent },
  { path: 'employeelist', component: EmployeeListComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'createdepartment', component: CreateDepartmentComponent },
  { path: 'departmentlist', component: DepartmentListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
