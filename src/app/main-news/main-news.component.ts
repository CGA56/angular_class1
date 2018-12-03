import { Component } from "@angular/core";

@Component({
    selector:'app-main-news',
    templateUrl:'./main-news.component.html',
})
export class MainNewComponent {
 public title ="Noticia nueva";

 public setTitle(titulo:string){
    this.title=titulo
 }
}