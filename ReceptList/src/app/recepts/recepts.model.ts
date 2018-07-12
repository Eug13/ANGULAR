import {Ingridient} from '../shopping-list/shopping-model'

export class Recept {
    id:number;
    name: string;
    description: string;
    imgPath: string;
    ingridients:Ingridient[];
    constructor( name: string, description: string, imgPath: string, ingridients:Ingridient[]) {
        this.name = name;
        this.description = description;
        this.imgPath = imgPath;
        this.ingridients=ingridients;
    }


}