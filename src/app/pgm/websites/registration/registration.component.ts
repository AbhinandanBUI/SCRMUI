import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  // registrationForm = FormGroup;
  constructor(private fb:FormBuilder) {
    this.regForm();
    
   }
   registrationForm = new FormGroup({
    fname: new FormControl('',[Validators.required,Validators.minLength(3)]),
      lname: new FormControl('',[Validators.required,Validators.minLength(3)]),
      mobile: new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: new FormControl('',[Validators.required,Validators.minLength(3)]),
      govid: new FormControl('',[Validators.required,Validators.minLength(3)]),
      password: new FormControl('',[Validators.required,Validators.minLength(3)]),
      cpassword: new FormControl('',[Validators.required,Validators.minLength(3)])
   })




 

  ngOnInit(): void {
    
  }

  regForm(){
   
    // this.registrationForm =   this.fb.group({
    //   fname:['',[Validators.required,Validators.minLength(3)]],
    //   lname:['',[Validators.required,Validators.minLength(3)]],
    //   mobile:['',[Validators.required,Validators.minLength(3)]],
    //   email:['',[Validators.required,Validators.minLength(3)]],
    //   govid:['',[Validators.required,Validators.minLength(3)]],
    //   password:['',[Validators.required,Validators.minLength(3)]],
    //   cpassword:['',[Validators.required,Validators.minLength(3)]]
    // });


   }
 

}
