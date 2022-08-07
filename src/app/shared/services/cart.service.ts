import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BurgerCommande } from '../models/burger-commande';
import { Cart } from '../models/cart';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private panierSave: Cart = {
    burgerCommandes: [],
    portionFriteCommandes: [],
    boissonTailleCommandes: [],
    menuCommandes: [],
  }
  Panier = new BehaviorSubject<Cart>(this.panierSave);

  cart: Produit[] = [];
  numOfItems = new BehaviorSubject<Produit[]>([]);
  constructor() {
    const ls = JSON.parse(localStorage.getItem('cart') || 'null')
    if (ls) {
      this.Panier.next(ls)
    }
  }


  /* add(product: Produit | undefined) {
    let ls = JSON.parse(localStorage.getItem('cart') || 'null')
    if (ls) {
      const newData = [...ls, product]
      localStorage.setItem('cart', JSON.stringify(newData));
      // this.cart.push(product);
      this.numOfItems.next(JSON.parse(localStorage.getItem('cart') || 'null'))
      //console.log(this.cart)
    }
    else {
      if (product) {
        this.cart.push(product);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.numOfItems.next(this.cart)
      }
    }

  } */

  addBurger(burger: BurgerCommande) {
    let ls = JSON.parse(localStorage.getItem('cart') || 'null')
    let found = false
    this.Panier.value.burgerCommandes?.map(data => {
      if (data.burger?.id == burger.burger?.id) {
        data.quantite += Number(burger.quantite)
        found = true
      }
      return data
    })

    if (!found) {
      localStorage.setItem('cart', JSON.stringify(this.Panier));
      return this.Panier.next(
      {
        ...this.Panier.value, 
        burgerCommandes: this.Panier.value.burgerCommandes?.concat(burger)

      }
      )
    }
    else{
      this.Panier.next
    }
  }

}
