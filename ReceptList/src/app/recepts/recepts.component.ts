import { Component} from '@angular/core';

@Component({
  selector: 'app-recepts',
  templateUrl: './recepts.component.html',
  styleUrls: ['./recepts.component.css']
})
export class ReceptsComponent  {
 recept
  constructor() { }

 getRecept(recept){
    this.recept = recept;
 }

}
