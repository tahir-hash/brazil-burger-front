import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { Produit } from 'src/app/shared/models/produit';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'mtm-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  @Input('panier') panier : boolean = true;
  items:Cart={
    all:[]
  };
 
  constructor(private cart:CartService) { }
  
  ngOnInit(): void {
    this.cart.Panier.subscribe(data=>{
      if(data.burgerCommandes && data.menuCommandes && data.boissonTailleCommandes && data.portionFriteCommandes){
        data.all=[...data.burgerCommandes,...data.menuCommandes]; 
      }
      this.items=data
    })
  
  }
  removeToCart(obj:any) {
    this.cart.remove(obj);
  }

}
