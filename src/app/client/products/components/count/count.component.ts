import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mtm-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent implements OnInit {
  constructor() { }
  nombre = 1
  @Output() disabled : EventEmitter<boolean> = new EventEmitter();

  attr_dis=false;
  
  ngOnInit(): void {
  }
  qtyminus(input: any) {
    if (input != null) {
      var current = Number(input.value);
      var newval = (current - 1);
      if (newval < 1) {
        newval = 1;
      }
      input.value = Number(newval);
    }
  }

  qtyplus(input: any) {
    if (input != null) {
      var current = Number(input.value);
      var newval = (current + 1);
      input.value = Number(newval);
    }
  }

  validCount() {
    if (this.nombre == 0) {
      return 'La quantité doit etre superieur a zero';
    }
    else {
      return ''
    }
  }

  onKey(event: any){
    const value = event.target.value;
    if(value==0)
    {
      this.attr_dis=true
      this.disabled.emit(this.attr_dis);
    }
    else
    {
      this.attr_dis=false
      this.disabled.emit(this.attr_dis);
    }
  }

}
