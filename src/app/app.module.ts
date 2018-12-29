import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 


import { NewNavBarComponent } from './nav-news/nav-news.component';

import { FormReactCreateAcountComponent } from './form-react-create-acount/form-react-create-acount.component';
import {HttpClientModule} from '@angular/common/http';



 

@NgModule({
  declarations: [
    AppComponent,
    NewNavBarComponent,
    FormReactCreateAcountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
