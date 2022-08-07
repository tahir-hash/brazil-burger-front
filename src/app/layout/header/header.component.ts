import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'mtm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
count:any=0
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.Panier.subscribe(info=>{
      if(info.burgerCommandes && info.menuCommandes && info.boissonTailleCommandes && info.portionFriteCommandes){

        this.count=info.burgerCommandes?.length + info.menuCommandes?.length + info.portionFriteCommandes?.length + info.boissonTailleCommandes?.length
      }
      
    })
  }

}
