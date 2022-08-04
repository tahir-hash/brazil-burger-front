import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
constructor() { }
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
}
