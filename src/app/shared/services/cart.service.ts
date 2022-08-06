import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Produit[]=[];
  numOfItems=new BehaviorSubject<Produit[]>([]);
  constructor() { }

  
  add(product:Produit|undefined){
    const exist=this.cart.find((item:Produit)=>{
      return item.id === product?.id;
    });
    if(product){
      this.cart.push(product);
    this.numOfItems.next(this.cart)
    //console.log(this.cart)
    }
    
  }
  

  
}
