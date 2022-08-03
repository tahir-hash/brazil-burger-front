import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceEventService } from 'src/app/client/products/shared/services/service-event.service';

@Component({
  selector: 'mtm-minus-count',
  templateUrl: './minus-count.component.html',
  styleUrls: ['./minus-count.component.css']
})
export class MinusCountComponent implements OnInit {
  //@Output() submit : EventEmitter<any> = new EventEmitter();
  quantite=0;
  constructor(private serv:ServiceEventService) {}

  ngOnInit(): void {
  }
  qtyminus(input: any) {
    if(input != null)
    {
    var current = Number(input.value);
    var newval = (current - 1);
    if(newval < 1) {
      newval = 1;
    }
    input.value = Number(newval);
    }
  }

  qtyplus(input: any) {
    if(input != null)
    {
    var current = Number(input.value);
    var newval = (current + 1);
    input.value = Number(newval);
    }
  }

  onChange(event:any){
    const value= event.target.value;
    this.quantite = Number(value);
    this.serv.emitValue(this.quantite)
  }


  @Input()  size: number=0;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(0, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
