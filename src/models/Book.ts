export class Book{
    description: String[];
    isLend: boolean;

    constructor(public name: String){
        this.isLend=false;
    }

}