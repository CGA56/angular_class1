import{ Component, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector:'app-videos-news',
    templateUrl:'./videos-news.component.html',
})
export class VideosComponent{
   public perritos: any = [
     {id:'1',path:'f0uQdEkKuok'},
     {id:'2',path:'https://youtu.be/yKLjmSMv1KA'},
     {id:'3',path:'https://youtu.be/yKLjmSMv1KA'},
   ];


  
}