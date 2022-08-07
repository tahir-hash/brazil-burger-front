import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'mtm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
count:number=0
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.numOfItems.subscribe(info=>{
      console.log(info)
      this.count=info.length;
    })
  }

}
