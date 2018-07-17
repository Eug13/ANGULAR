import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.servise'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

constructor(private dataStorageServise:DataStorageService){}

onSaveData() {
  this.dataStorageServise.storeRecipes()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
}

onFetchData() {
  this.dataStorageServise.getRecipes();
}

ngOnInit(){
  this.dataStorageServise.getRecipes();
}

}
