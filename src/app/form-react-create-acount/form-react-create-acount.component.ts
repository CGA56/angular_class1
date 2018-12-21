import { Component , OnInit } from '@angular/core';
import {  FormControl , FormGroup, Validators} from '@angular/forms';
import { PasswordValidator } from '../form-react-create-acount/form-react-create-acount-validator.validator';
@Component({
  selector: 'app-form-react-create-acount',
  templateUrl: './form-react-create-acount.component.html',
  styleUrls: ['./form-react-create-acount.component.css']
})
 
export class FormReactCreateAcountComponent implements OnInit {

 

  profileForm : FormGroup;
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name : new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      email2: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required)
    });
  }
   
  get name() { return this.profileForm.get('name'); }
  get lastName() { return this.profileForm.get('lastName'); }
  get email() { return this.profileForm.get('email'); }
  get email2() { return this.profileForm.get('email2'); }
  get matchEmail(){return this.profileForm.get('email')==this.profileForm.get('email2')};
  // profileForm = new FormGroup({
  //   name : new FormControl('',Validators.required)
  // });

 
 
}
