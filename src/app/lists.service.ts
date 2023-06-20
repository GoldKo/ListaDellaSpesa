import { Injectable } from '@angular/core';
import { List } from './models/list.model';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  lists: List[] = [];
  currentListIndex = 0;

  constructor() { }

  createList(name : string){
    this.lists.push(new List(name))
  }

  removeList(index : number){
    this.lists.splice(index,1,)
  }

  addProduct(product : Product){
    product.name = product.name.trim()
    let check = false;
    this.lists[this.currentListIndex].products.forEach((p,i) => {
      if(product.name.trim() == p.name.trim()){
        p.amount += product.amount;
        check = true;
        
      }
    });
      
    if(!check)
      this.lists[this.currentListIndex].products.push(product) 
  }

  removeProduct(product : Product){
    this.lists[this.currentListIndex].products.forEach((p,i) => {
      if(product.name.trim() == p.name.trim()){
        this.lists[this.currentListIndex].products.splice(i,1,)
        
      }
    });
  }

  changeList(index : number){
    this.currentListIndex = index;
  }

}

