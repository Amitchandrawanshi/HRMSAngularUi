import {Employee} from 'src/app/Models/employee.model';
import {EmployeeService} from 'src/app/Services/employee.service'
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: []
})

export class EmployeeListComponent implements OnInit {

  constructor(private service: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.GetEmployeeList();
  }

  populateForm(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(EmployeeId: any) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.DeleteEmployeeById(EmployeeId)
        .subscribe(res => {
          debugger;
          this.service.GetEmployeeList();
          this.toastr.warning('Deleted successfully', 'HR Management System');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }
}
