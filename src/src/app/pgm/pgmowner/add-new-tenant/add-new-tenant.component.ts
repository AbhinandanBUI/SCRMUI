import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-add-new-tenant',
  templateUrl: './add-new-tenant.component.html',
  styleUrls: ['./add-new-tenant.component.scss']
})
export class AddNewTenantComponent implements OnInit {
  @ViewChild('item', { static: true }) accordion;


  TenantRegistrationForm : FormGroup;

  constructor(private _Fb:FormBuilder) {
    this.formOnit();
   }

  ngOnInit(): void {
  }
  formOnit(){
    this.TenantRegistrationForm = this._Fb.group({
      fullname:['',[Validators.required]],
      mobile:['',[Validators.required]],
      email:['',[Validators.required]],
      rentAmount:['',[Validators.required]],
      securityfees:['',[Validators.required]],
      govid:['',[Validators.required]],
      houseno:['',[Validators.required]],
      landmark:['',[Validators.required]],
      city:['',[Validators.required]],
      dist:['',[Validators.required]],
      state:['',[Validators.required]],
      pincode:['',[Validators.required]],
      preview:[''],
      yourphoto:[''],
      documnetphoto:[''],
    })
  }


  toggle() {
    this.accordion.toggle();
  }
  SaveTenant(){
    console.log(this.TenantRegistrationForm.get('fullname').value);
  }
}
