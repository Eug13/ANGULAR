import { Recept } from './recepts.model'
import { EventEmitter } from '@angular/core';
import {Ingridient} from '../shopping-list/shopping-model'


export class ReceptsService {

    receptSelect = new EventEmitter<Recept>();

    private recepts: Recept[] = [
        new Recept(1,'Recept-Title', 'Recept-description', 'http://www.a2zlifestyle.com/wp-content/uploads/2013/08/Healthy-and-Delicious-Pizza-at-Home.jpg',[
            new Ingridient('chese',2),
            new Ingridient('salo',2),
            new Ingridient('Meat',10),
            new Ingridient('Cheese',10),
            new Ingridient('Salat',7)
        
        ]),
        new Recept(2,'New-Title', 'New-description', 'http://pizza.na-vse-100.com.ua/img/p/17-212-thickbox.jpg',[
            new Ingridient('salo',2),
            new Ingridient('Meat',10),
            new Ingridient('Cheese',10),
            new Ingridient('Salat',7)

        
        ])

    ]

    getRecepts(): Recept[] {
        return this.recepts.slice();

    }
    
}
