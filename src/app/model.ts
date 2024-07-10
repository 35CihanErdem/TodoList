
export class Model{
user:any;
items: any[] = [];

    constructor() {
      this.items = [
        new TodoItems("Spor",false),
        new TodoItems("Kahvalti",false),
        new TodoItems("Ders",false),
        new TodoItems("Kodlama",false),
        new TodoItems("Müzik",false),
        new TodoItems("Dinlenme",false),
        new TodoItems("Sosyalleşme",false),
      ];  
  
    }
}
export class TodoItems{
    
    description:any;
    action:any;

    constructor(description:any,action:any){
            this.description=description;
            this.action=action;
    }

}

