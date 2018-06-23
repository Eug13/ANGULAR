import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent {

  motos=[{name:'DUCATTI',motor:1000}];
  constructor() { }

  updateMoto(moto:{name:string,motor:number}){
     this.motos.push(moto);
  }

}
