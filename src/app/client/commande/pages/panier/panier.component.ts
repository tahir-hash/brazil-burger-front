import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'mtm-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  @Input('panier') panier : boolean = true;
  count:number = 0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.numOfItems.subscribe(data=>{
      //this.count = data.length;
      console.log(data)
    })
  }

}
