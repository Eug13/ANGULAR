import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-moto-input',
  templateUrl: './moto-input.component.html',
  styleUrls: ['./moto-input.component.css']
})

export class MotoInputComponent{
  motoName ='SUZZUKI';
  motoMotor = 1000;
  
  @Output('newMoto') newMoto = new EventEmitter<{name:string,motor:number}>();
  
  addMoto(){
  this.newMoto.emit({
    name:this.motoName,
    motor:this.motoMotor
  });
  this.motoName = '';
  this.motoMotor = null;
  }
  constructor() { }



}
