import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-recept-item',
  templateUrl: './recept-item.component.html',
  styleUrls: ['./recept-item.component.css']
})
export class ReceptItemComponent{

  constructor() { }
@Input() recept;

}
