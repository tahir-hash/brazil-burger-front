import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BurgerCommande } from 'src/app/shared/models/burger-commande';
import { CartService } from 'src/app/shared/services/cart.service';
import { Produit } from '../../../../shared/models/produit';

@Component({
  selector: 'mtm-details-desc',
  templateUrl: './details-desc.component.html',
  styleUrls: ['./details-desc.component.css']
})
export class DetailsDescComponent implements OnInit {
@Input() details:Produit| undefined = undefined;
 btnQte=1;
@Output() btnQteChange = new EventEmitter<number>();
constructor(private cart:CartService) { }
  attr_dis=false;
  
  ngOnInit(): void {
  }
  tailleCtr(event:number)
  {
    this.btnQte=event;
    this.btnQteChange.emit(this.btnQte);
  }

  Ondisabled(event:any){
   this.attr_dis=event;
  }

  ok(){
    alert("ok");
  }

  addToCart(det:Produit|undefined){    
    if(det?.type=='burger'){
      
      let obj={
        quantite:this.btnQte,
        burger: det
      }
      this.cart.addBurger(obj)
      console.log(this.cart.Panier.value)
    }
    
  }
}
