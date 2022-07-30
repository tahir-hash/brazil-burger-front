import { Component, Input, OnInit } from '@angular/core';
import { Boisson } from '../../shared/models/Boisson';

@Component({
  selector: 'mtm-boissons',
  templateUrl: './boissons.component.html',
  styleUrls: ['./boissons.component.css']
})
export class BoissonsComponent implements OnInit {
  @Input() boisson:Boisson | undefined = undefined;

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
