import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { Produit } from 'src/app/shared/models/produit';
import { Quartier } from 'src/app/shared/models/quartier';
import { CartService } from 'src/app/shared/services/cart.service';
import { QuartiersService } from 'src/app/shared/services/quartiers.service';

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
  prix: number=0
  qrt:Quartier[]=[]
  constructor(private cart:CartService,private quartier:QuartiersService) { }
  
  ngOnInit(): void {
    this.cart.Panier.subscribe(data=>{
      if(data.burgerCommandes && data.menuCommandes && data.boissonTailleCommandes && data.portionFriteCommandes){
        data.all=[...data.burgerCommandes,...data.menuCommandes]; 
      }
      this.items=data
      this.prix=this.cart.getMontant()
    })
    
    this.quartier.getQuartier$().subscribe(quart=>{
      this.qrt=quart
    })
  }
  removeToCart(obj:any) {
    this.cart.remove(obj);
  }


  //nav tabs
  activeTab: string = 'search';

  search(activeTab: string) {
    this.activeTab = activeTab;
  }

  result(activeTab: string) {
    this.activeTab = activeTab;
  }


  
}
