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
  items:Cart={};

  constructor(private cart:CartService) { }
  activeTab: string = 'search';

  search(activeTab: string) {
    this.activeTab = activeTab;
  }

  result(activeTab: string) {
    this.activeTab = activeTab;
  }
  ngOnInit(): void {
    this.cart.Panier.subscribe(data=>{
      this.items = data;
    })
    /* this.cart.numOfItems.subscribe((data:Cart) => {
      this.items=data
    }) */
  }

}
