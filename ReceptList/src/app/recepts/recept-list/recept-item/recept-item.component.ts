import { Component,Input,Output,EventEmitter } from '@angular/core';
import { ReceptsService } from '../../recepts.service';


@Component({
  selector: 'app-recept-item',
  templateUrl: './recept-item.component.html',
  styleUrls: ['./recept-item.component.css']
})
export class ReceptItemComponent{
  @Input() recept;


  @Output() routeSelected = new EventEmitter<string>();
  constructor(private receptsServise:ReceptsService) {

   }

onSelected(){
  this.receptsServise.receptSelect.emit(this.recept);
}

onSelect(route:string){
  this.routeSelected.emit(route);
}


}
