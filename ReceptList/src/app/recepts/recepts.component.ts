import { Component, OnInit } from '@angular/core';
import { ReceptsService } from './recepts.service';
import { Recept } from './recepts.model';

@Component({
  selector: 'app-recepts',
  templateUrl: './recepts.component.html',
  styleUrls: ['./recepts.component.css']
})
export class ReceptsComponent implements OnInit {

  recept: Recept;

  constructor(private receptsServise: ReceptsService) { }
ngOnInit(){
  this.receptsServise.receptSelect.subscribe((recept:Recept) =>{
    this.recept = recept;
  })
}
  //  getRecept(recept){
  //     this.recept = recept;
  //  }

}
