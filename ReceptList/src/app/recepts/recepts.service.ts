import { Recept } from './recepts.model'
import { EventEmitter } from '@angular/core';


export class ReceptsService {

    receptSelect = new EventEmitter<Recept>();

    private recepts: Recept[] = [
        new Recept('Recept-Title', 'Recept-description', 'http://www.a2zlifestyle.com/wp-content/uploads/2013/08/Healthy-and-Delicious-Pizza-at-Home.jpg'),
        new Recept('New-Title', 'New-description', 'http://pizza.na-vse-100.com.ua/img/p/17-212-thickbox.jpg')

    ]

    getRecepts(): Recept[] {
        return this.recepts.slice();

    }
    
}
