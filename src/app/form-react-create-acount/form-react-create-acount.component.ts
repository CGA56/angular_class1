import { Component , OnInit } from '@angular/core';
import {  FormControl , FormGroup, Validators} from '@angular/forms';
import { validadores } from '../form-react-create-acount/form-react-create-acount-validator.validator';
import{ServiceConnectService} from '../service-connect.service';
import { element } from '@angular/core/src/render3';
@Component({
  selector: 'app-form-react-create-acount',
  templateUrl: './form-react-create-acount.component.html',
  styleUrls: ['./form-react-create-acount.component.css']
})
 
export class FormReactCreateAcountComponent implements OnInit {

  constructor(private service:ServiceConnectService){
       
  }
  dominio="@hotmail.cl";
  usuariosCollection =[];
  urlAvatar ="";
  apellidoUser ="";
  profileForm : FormGroup;
  validadorEmail: FormGroup;
  
  ngOnInit(): void {
    
    this.service.getusuarios().subscribe(
      (results)=>{
   
       let personaCollection = results['data'];
        for (let index = 0; index < personaCollection.length; index++) {
          this.usuariosCollection.push({id:personaCollection[index].id,nombre:personaCollection[index].first_name,apellido:personaCollection[index].last_name,avatar:personaCollection[index].avatar,correo:personaCollection[index].first_name+this.dominio})
        

        }
        this.usuariosCollection.sort(function(a,b){
          let resultado =0;
          if(a.nombre < b.nombre)
          {
            resultado= -1;
          }

          if(a.nombre > b.nombre){
            resultado= 1;
          }
          return resultado;
        });
        
      },
      (error)=>{
        console.log(error);
      }
    )


    
    this.profileForm = new FormGroup({
      name : new FormControl('',Validators.required),
      lastName: new FormControl(''),
      avatar: new FormControl(""),
       // Valida que los correos sean identicos.
      emailsGroup : new FormGroup({
        email:new FormControl('',[Validators.email,Validators.required]),
        email2:new FormControl('',[Validators.email,Validators.required])
      },{validators:validadores.areEqual})    
    });


  

    
  }

  onSelect(event:any ){
   
    let persona = event.target.value;
    persona = JSON.parse(persona);
    this.urlAvatar =persona.avatar;
    this.apellidoUser=persona.apellido;
 
  
  }
  onSubmit():void{
    this.urlAvatar="";
  }
  //  Accesadores
  get name() { return this.profileForm.get('name'); }
  get lastName() { return this.profileForm.get('lastName'); }
  get email() { return this.profileForm.get('email'); }
  get email2() { return this.profileForm.get('email2'); }
  get avatar(){return this.profileForm.get('avatar');}
 
   
  
  

 
 
}
