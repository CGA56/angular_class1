import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-po',
  templateUrl: './comp-po.component.html',
  styleUrls: ['./comp-po.component.css']
})
export class CompPoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  aMayuscula(palabra){
    return palabra.toUpperCase();
  }

}
