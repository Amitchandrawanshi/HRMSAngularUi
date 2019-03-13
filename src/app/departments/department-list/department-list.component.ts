import {Department} from 'src/app/Models/department.model';
import {DepartmentService} from 'src/app/Services/department.service'
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styles: []
})

export class DepartmentListComponent implements OnInit {

  constructor(private deptservice: DepartmentService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.deptservice.GetDepartmentList();
  }

  populateForm(dept: Department) {
    this.deptservice.formData = Object.assign({}, dept);
  }

  onDelete(DepartmentId: any) {
    if (confirm('Are you sure to delete this record ?')) {
      this.deptservice.DeleteDepartmentById(DepartmentId)
        .subscribe(res => {
          debugger;
          this.deptservice.GetDepartmentList();
          this.toastr.warning('Department Deleted successfully', 'HR Management System');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }
}

