import {Component} from "@angular/core";

@Component({
  selector:'app-nav-news',
  templateUrl:'./nav-news.component.html',
})
export class NewNavBarComponent{

  public navBarItem :any=[
    {name:'Inicio',path:'/'},
    {name:'Videos',path:'videos'},
    {name:'Encuesta',path:'survey'},
    

     
     
  ];
}