import {EmployeeService} from 'src/app/Services/employee.service'
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styles: []
})

export class CreateEmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      EmployeeId: 0,
      FirstName: '',
      LastName: '',
      Department: 0,
      Gender: ''
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.EmployeeId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.CreateEmployee().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        this.service.GetEmployeeList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.UpdateEmployee().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Payment Detail Register');
        this.service.GetEmployeeList();
      },
      err => {
        console.log(err);
      }
    )
  }

}

