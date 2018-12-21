import {Component} from '@angular/core';

@Component({
    selector:'app-survey',
    templateUrl:'./survey-news.component.html'
})
export class SurveyComponent{

    // constructor(public nombre:string,public edad:number,public comentarios:string){}
    
    submitted = false;

    onSubmit() { this.submitted = true; 
        console.log('hola');
    }

    // setData(){
    //     console.log('paso');
    // }
}