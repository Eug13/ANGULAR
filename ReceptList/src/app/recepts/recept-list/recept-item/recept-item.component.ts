import { Component,Input } from '@angular/core';
import { ReceptsService } from '../../recepts.service';
import { Recept } from '../../recepts.model'


@Component({
  selector: 'app-recept-item',
  templateUrl: './recept-item.component.html',
  styleUrls: ['./recept-item.component.css']
})
export class ReceptItemComponent {

  @Input() recept:Recept;
  @Input()index:number;

}
