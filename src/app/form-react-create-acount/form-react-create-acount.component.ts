import { Component , OnInit } from '@angular/core';
import {  FormControl , FormGroup, Validators} from '@angular/forms';
import { validadores } from '../form-react-create-acount/form-react-create-acount-validator.validator';
@Component({
  selector: 'app-form-react-create-acount',
  templateUrl: './form-react-create-acount.component.html',
  styleUrls: ['./form-react-create-acount.component.css']
})
 
export class FormReactCreateAcountComponent implements OnInit {

 

  profileForm : FormGroup;
  validadorEmail: FormGroup;
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name : new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      emailsGroup : new FormGroup({
        email:new FormControl(''),
        email2:new FormControl('')
      },{validators:validadores.areEqual})    
    });

    
  }
   
  get name() { return this.profileForm.get('name'); }
  get lastName() { return this.profileForm.get('lastName'); }
  get email() { return this.profileForm.get('email'); }
  get email2() { return this.profileForm.get('email2'); }
  
  // profileForm = new FormGroup({
  //   name : new FormControl('',Validators.required)
  // });

 
 
}
