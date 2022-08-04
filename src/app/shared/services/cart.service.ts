import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any=[];
  public productList= new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  addTocart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  removeCartItem(product:any){
    this.cartItemList.map((data:any,i:any)=>{
      if(product.id==data.id){
        this.cartItemList.splice(i,1);
      }
    });
  }

  removeAllCartItems(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList)
  }
  
  getTotalPrice(){
    let totalPrice = 0;
    this.cartItemList.map((data:any)=>{
      totalPrice += data.price;
    });
  }
}
