import { Component} from '@angular/core';
import {Recept} from '../recepts.model'

@Component({
  selector: 'app-recept-list',
  templateUrl: './recept-list.component.html',
  styleUrls: ['./recept-list.component.css']
})
export class ReceptListComponent {
    recepts:Recept[] = [
      new Recept('Recept-Title','Recept-description','http://www.a2zlifestyle.com/wp-content/uploads/2013/08/Healthy-and-Delicious-Pizza-at-Home.jpg'),
      new Recept('New-Title','New-description','http://www.a2zlifestyle.com/wp-content/uploads/2013/08/Healthy-and-Delicious-Pizza-at-Home.jpg')

    ]

  constructor() { }


}
