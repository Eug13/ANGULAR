import {Ingridient} from '../shopping-list/shopping-model'

export class Recept {
    id:number;
    name: string;
    description: string;
    imgPath: string;
    ingridients:Ingridient[];
    constructor(id : number, name: string, description: string, imgPath: string, ingridients:Ingridient[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imgPath = imgPath;
        this.ingridients=ingridients;
    }


}