import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',//selector:'.person' // in this case this component will work in parent in divs with class person
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  name = '';
  surname = '';
  Nikname ='';
  newName='';
  newSurname ='';
  AddPerson ='';
  btnActive = false;
  personArr = ['Tom','Will','Jack'];
  addNewPerson = '';
  constructor() {

  }

  getPerson() {
    this.name = 'Peter';
    this.surname = 'Parker';
  }

  setName(value){  
    this.name = value;
  }

  setSurname(value){  
    this.surname = value;
  }

  inputNikname(value){
    this.Nikname = value;
  }


  setNewName(value){
    this.newName = value;
  }


  addPerson(){
   this.btnActive = true;
   this.personArr.push(this.addNewPerson)
  }



}
