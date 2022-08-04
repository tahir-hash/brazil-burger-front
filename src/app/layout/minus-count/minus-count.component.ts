import { Component,ElementRef,EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ServiceEventService } from 'src/app/shared/services/service-event.service';

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


  @Input()  quantity: number=0;
  @Output() quantityChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.quantity = Math.min(40, Math.max(0, +this.quantity + delta));
    this.quantityChange.emit(this.quantity);
  }
}
