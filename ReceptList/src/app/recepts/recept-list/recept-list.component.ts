import { Component, Output, EventEmitter } from '@angular/core';
import { Recept } from '../recepts.model'

@Component({
  selector: 'app-recept-list',
  templateUrl: './recept-list.component.html',
  styleUrls: ['./recept-list.component.css']
})
export class ReceptListComponent {

@Output() selectedRecept = new EventEmitter<Recept>();


  recepts: Recept[] = [
    new Recept('Recept-Title', 'Recept-description', 'http://www.a2zlifestyle.com/wp-content/uploads/2013/08/Healthy-and-Delicious-Pizza-at-Home.jpg'),
    new Recept('New-Title', 'New-description', 'http://pizza.na-vse-100.com.ua/img/p/17-212-thickbox.jpg')

  ]

  constructor() { }

  showDetails(recept:Recept):void {
    this.selectedRecept.emit(recept);
    console.log('we are here!')
  }

 
}
