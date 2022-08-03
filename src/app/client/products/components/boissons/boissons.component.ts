import { Component, Input, OnInit, Output } from '@angular/core';
import { Boisson } from '../../shared/models/Boisson';

@Component({
  selector: 'mtm-boissons',
  templateUrl: './boissons.component.html',
  styleUrls: ['./boissons.component.css']
})
export class BoissonsComponent implements OnInit {
  @Input() boisson:Boisson | undefined = undefined;
  fontSizePx=0
  constructor() { }

  ngOnInit(): void {
  }
  
  onCount(event:any)
  {
    console.log(event);
  }
 
}
