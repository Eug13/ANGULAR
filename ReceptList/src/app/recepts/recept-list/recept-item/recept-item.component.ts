import { Component,Input } from '@angular/core';
import { ReceptsService } from '../../recepts.service';


@Component({
  selector: 'app-recept-item',
  templateUrl: './recept-item.component.html',
  styleUrls: ['./recept-item.component.css']
})
export class ReceptItemComponent{

  constructor(private receptsServise:ReceptsService) {

   }

onSelected(){
  this.receptsServise.receptSelect.emit(this.recept);
}

@Input() recept;

}
