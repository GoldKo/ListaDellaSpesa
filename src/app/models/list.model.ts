import { Product } from "./product.model";

export class List {
    name: string = "";
    products : Product [];
  
    constructor(name : string){
      this.name = name;
      this.products = [];
    }
     
}
