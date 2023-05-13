import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmartTableData } from '../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-school-teacher',
  templateUrl: './school-teacher.component.html',
  styleUrls: ['./school-teacher.component.scss']
})
export class SchoolTeacherComponent implements OnInit {
  constructor(private service: SmartTableData, private _router: Router) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit(): void {
  }
  newTeacher() {
    this._router.navigateByUrl('./newteachers')
  }
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: true
    },
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-person text-info"></i>',
      confirmDelete: true,
    },
    view: {
      viewButtonContent: '<i class="nb-person text-info"></i>',
      view: true

    },
    columns: {
      id: {
        title: 'Roll No',
        type: 'number',
      },
     
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();



  viewDetails(event): void {
    // if (window.confirm('Are you sure you want to delete?')) {
    //   event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
    console.log(event.data)
  }
}

