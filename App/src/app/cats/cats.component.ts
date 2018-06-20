import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent{
  catsArr = [];
  btnActive = false;
  obj = {
    addNewCatName:'',
    addNewCatBreed:'',
    addNewCatAlterEgo:''
  };
  constructor() { }

  addCat(){
    this.btnActive = true;
    const obj = this.obj;
    
    this.catsArr.push(obj);
   }
 
   setName(value){
     this.obj.addNewCatAlterEgo = value;
   }

}
