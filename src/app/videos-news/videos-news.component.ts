import{ Component, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector:'app-videos-news',
    templateUrl:'./videos-news.component.html',
})
export class VideosComponent{
   public perritos: any = [
     {name:'perrito1',path:'f0uQdEkKuok'},
     {name:'perrito2',path:'https://youtu.be/yKLjmSMv1KA'},
     {name:'perrito3',path:'https://youtu.be/yKLjmSMv1KA'},
   ];


   public url = "";
   private sanitizer:DomSanitizer;

   public sanitizarUrl (url:string){
      return this.sanitizer.bypassSecurityTrustHtml(url);
   }
}