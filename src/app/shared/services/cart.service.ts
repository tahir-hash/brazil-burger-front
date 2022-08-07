import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private panierSave : Cart = {
    burgerCommandes:[],
    portionFriteCommandes: [],
    boissonTailleCommandes:[],
    menuCommandes : [],
  }
  
  cart: Produit[] = [];
  numOfItems = new BehaviorSubject<Produit[]>([]);
  constructor() {
    const ls = JSON.parse(localStorage.getItem('cart') || 'null')
    if (ls) {
      this.numOfItems.next(ls)
    }
  }


  add(product: Produit | undefined) {
    let ls = JSON.parse(localStorage.getItem('cart') || 'null')
    if (ls) {
      const newData = [...ls, product]
      localStorage.setItem('cart', JSON.stringify(newData));
      // this.cart.push(product);
      this.numOfItems.next(JSON.parse(localStorage.getItem('cart') || 'null'))
      //console.log(this.cart)
    }
    else{
      if(product){
        this.cart.push(product);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.numOfItems.next(this.cart)
      }
    }

  }



}
