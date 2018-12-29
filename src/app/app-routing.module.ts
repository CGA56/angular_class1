import { NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import {FormReactCreateAcountComponent} from './form-react-create-acount/form-react-create-acount.component';


// Al llamar la url se cargara el component
const routes: Routes = [

  {path:'createAcount',component:FormReactCreateAcountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule , FormsModule, ReactiveFormsModule]
})
export class AppRoutingModule { }
