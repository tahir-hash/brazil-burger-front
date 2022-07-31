import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mtm-minus-count',
  templateUrl: './minus-count.component.html',
  styleUrls: ['./minus-count.component.css']
})
export class MinusCountComponent implements OnInit {

  constructor() { }

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
}
